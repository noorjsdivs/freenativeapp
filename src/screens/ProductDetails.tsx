import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonHeader from '../components/CommonHeader';
import {useRoute} from '@react-navigation/native';
import {HomeStackNavigatorParamProps} from '../../type';
import {ScrollView} from 'react-native-gesture-handler';
import FormattedPrice from '../components/FormattedPrice';
import {ShoppingCartIcon} from 'react-native-heroicons/solid';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../redux/shopperslice';

interface Product {
  _id: number;
  title: string;
  image: string;
  des: string;
  price: string;
  oldPrice: string;
  isNew: boolean;
  category: string;
  brand: string;
}

const ProductDetails = () => {
  const route = useRoute<HomeStackNavigatorParamProps>();
  const [productData, setProductData] = useState<Product>({} as Product);
  const product = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    setProductData(product.item);
  }, [route, productData]);

  const products = useSelector((state: any) => state.shopper.productData);

  return (
    <View className="px-2 relative">
      <CommonHeader
        title="Product Details"
        icon={<ShoppingCartIcon />}
        itemQuantity={products.length}
      />
      <ScrollView className="w-full h-screen bg-white">
        <View className="items-center mt-4">
          <Image source={{uri: productData.image}} className="w-60 h-60" />
        </View>
        <View className="px-4 gap-1">
          <Text className="text-black text-xl font-semibold">
            {productData.title}
          </Text>
          <Text className="text-base">
            Price: <FormattedPrice amount={productData.price} />{' '}
            <Text className="text-gray-600 line-through">
              {productData.oldPrice}
            </Text>
          </Text>
          <Text>{productData.des}</Text>
          <Text>
            Brand:{' '}
            <Text className="text-black font-semibold text-base">
              {productData.brand}
            </Text>
          </Text>
          <Text className="mb-3">
            Category:{' '}
            <Text className="text-black font-semibold text-base">
              {productData.category}
            </Text>
          </Text>
          <TouchableOpacity
            onPress={() =>
              dispatch(
                addToCart({
                  _id: productData._id,
                  title: productData.title,
                  image: productData.image,
                  des: productData.des,
                  price: productData.price,
                  oldPrice: productData.oldPrice,
                  isNew: productData.isNew,
                  category: productData.category,
                  brand: productData.brand,
                  quantity: 1,
                }),
              )
            }
            className="w-full h-12 bg-black items-center justify-center rounded-full">
            <Text className="text-white text-base font-semibold">
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
        {/* isNew State */}
        {productData.isNew && (
          <View className="absolute top-4 right-4 px-4 items-center justify-center rounded-full border-[1px] border-gray-700">
            <Text className="text-gray-700 text-sm font-semibold">!Sale</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default ProductDetails;
