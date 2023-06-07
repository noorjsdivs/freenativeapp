import {View, Text, ScrollView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import HomeHeader from '../components/HomeHeader';
import FormattedPrice from '../components/FormattedPrice';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {HomeStackNavigatorParamProps} from '../../type';
import {useDispatch} from 'react-redux';
import {addToCart, allProducts} from '../redux/shopperslice';
type ProductsData = {
  _id: number;
  title: string;
  image: string;
  des: string;
  price: string;
  oldPrice: string;
  isNew: boolean;
  category: string;
  brand: string;
}[];

const Home = ({navigation}: HomeStackNavigatorParamProps) => {
  const [loading, setLoading] = useState(false);
  const [productsData, setProductsData] = useState<ProductsData>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch('https://fakestoreapiserver.reactbd.com/walmart');
      const data = await res.json();
      setProductsData(data);
      dispatch(
        allProducts({
          item: data,
        }),
      );
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <View className="px-2 bg-gray-50">
      <HomeHeader navigation={navigation} />
      <ScrollView className="py-2">
        <View className="items-center">
          <Text className="text-base font-semibold underline decoration-gray-400">
            bazaar online shopping
          </Text>
          <Text className="mt-1 text-gray-600 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo modi
            sapiente accusamus optio minus. Dolor, ipsam! Velit laborum adipisci
            quaerat.
          </Text>
        </View>
        <View className="mt-8">
          {loading ? (
            <Text className="text-center text-xl font-medium text-rose-700">
              bazaar product is loading...
            </Text>
          ) : (
            <View className="bg-gray-100">
              {productsData.map(item => (
                <View
                  key={item._id}
                  className="mb-6 py-4 bg-white shadow-lg border-[1px] border-blue-200 rounded-lg relative">
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ProductDetails', {
                        item: item,
                      })
                    }
                    className="items-center">
                    <Image
                      source={{uri: item.image}}
                      className="w-3/4 h-60 object-cover"
                    />
                  </TouchableOpacity>

                  <View className="px-6 mt-4 gap-2">
                    <Text className="text-base text-black font-semibold">
                      {item.title}
                    </Text>
                    <Text>{item.des.substring(0, 80)}...</Text>
                    <View>
                      <Text className="text-base">
                        Price: <FormattedPrice amount={item.price} />{' '}
                        <Text className="text-gray-600 line-through">
                          {item.oldPrice}
                        </Text>
                      </Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          dispatch(
                            addToCart({
                              _id: item._id,
                              title: item.title,
                              image: item.image,
                              des: item.des,
                              price: item.price,
                              oldPrice: item.oldPrice,
                              isNew: item.isNew,
                              category: item.category,
                              brand: item.brand,
                              quantity: 1,
                            }),
                          )
                        }
                        className="w-full h-10 bg-black items-center justify-center rounded-full">
                        <Text className="text-white text-base font-semibold">
                          Add to Cart
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {/* isNew state */}
                  {item.isNew && (
                    <View className="absolute top-4 right-4 px-4 items-center justify-center rounded-full border-[1px] border-gray-700">
                      <Text className="text-gray-700 text-sm font-semibold">
                        !Sale
                      </Text>
                    </View>
                  )}
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
