import {View, Text, ScrollView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonHeader from '../components/CommonHeader';
import {
  ShoppingCartIcon,
  MinusIcon,
  PlusIcon,
} from 'react-native-heroicons/solid';
import {useDispatch, useSelector} from 'react-redux';
import {HomeStackNavigatorParamProps, ProductsData} from '../../type';
import FormattedPrice from '../components/FormattedPrice';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {
  decreaseQty,
  deleteItem,
  increaseQty,
  resetCart,
} from '../redux/shopperslice';
import * as Animatable from 'react-native-animatable';

const Cart = () => {
  const [totalAmt, setTotalAmt] = useState<number>(0);
  const products = useSelector((state: any) => state.shopper.productData);
  const navigation = useNavigation<HomeStackNavigatorParamProps>();
  const dispatch = useDispatch();

  useEffect(() => {
    let amt = 0;
    products.map((item: ProductsData) => {
      amt += parseFloat(item.price) * item.quantity;
      return;
    });
    setTotalAmt(amt);
  }, [products]);
  const deliveryPrice = 20;

  return (
    <View className="px-2">
      <CommonHeader
        title="Your Cart"
        icon={<ShoppingCartIcon />}
        itemQuantity={products.length}
      />
      {products.length > 0 ? (
        <View className="w-full h-screen">
          <View className="w-full h-4/6 mt-4">
            <ScrollView>
              <View className="h-4/5 w-full">
                {products?.map((item: ProductsData) => (
                  <View
                    key={item._id}
                    className="mb-4 w-full bg-white p-2 flex-row items-center h-28">
                    <Image source={{uri: item.image}} className="w-24 h-24" />
                    <View className="ml-4 flex-1">
                      <Text className="text-lg font-semibold">
                        {item.title}
                      </Text>
                      <Text>{item.category}</Text>
                      <Text>
                        <FormattedPrice amount={item.price} />
                      </Text>

                      <TouchableOpacity
                        onPress={() => dispatch(deleteItem(item._id))}
                        className="w-20 py-[2px] rounded-lg bg-red-700 items-center justify-center">
                        <Text className="text-sm text-white font-semibold">
                          remove
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View className="h-full w-8 rounded-full bg-slate-200 items-center justify-between py-1">
                      <TouchableOpacity
                        onPress={() =>
                          dispatch(
                            decreaseQty({
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
                        className="w-5 h-5 bg-white rounded-full border-[1px] border-gray-500 items-center justify-center">
                        <MinusIcon size={15} color="#000000" />
                      </TouchableOpacity>
                      <Text>{item.quantity}</Text>
                      <TouchableOpacity
                        onPress={() =>
                          dispatch(
                            increaseQty({
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
                        className="w-5 h-5 bg-black rounded-full border-[1px] border-gray-500 items-center justify-center">
                        <PlusIcon size={15} color="#FFFFFF" />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
                <View className="w-full items-center justify-end">
                  <TouchableOpacity
                    onPress={() => dispatch(resetCart())}
                    className="w-60 h-8 rounded-full items-center justify-center bg-red-600">
                    <Text className="text-white text-base font-semibold">
                      Reset cart
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
          {/* Payment Details */}
          <View className="w-full h-2/6 bg-white mt-6 p-2">
            <View className="border-b-[1px] border-b-gray-500 py-2">
              <View className="flex-row items-center justify-between">
                <Text className="text-base text-gray-500">
                  SubTotal Items{' '}
                  <Text className="font-semibold">({products.length})</Text>
                </Text>
                <Text>
                  <FormattedPrice amount={totalAmt} />
                </Text>
              </View>
              <View className="flex-row items-center justify-between">
                <Text className="text-base text-gray-500">Delivery Fee</Text>
                <Text>
                  <FormattedPrice amount={deliveryPrice} />
                </Text>
              </View>
            </View>
            <View className="flex-row items-center justify-between mt-1">
              <Text className="text-base text-gray-500">Total</Text>
              <Text>
                <FormattedPrice amount={totalAmt + deliveryPrice} />
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Payments')}
              className="w-full h-10 bg-black rounded-full items-center justify-center mt-4">
              <Text className="text-white text-base font-semibold">
                Go to Payment
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Animatable.View
          animation="slideInUp"
          iterationCount={1}
          direction="alternate"
          duration={700}
          className="items-center py-10 w-full h-screen">
          <Text className="text-lg font-semibold text-red-600 underline">
            Your Cart is Empty
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            className="mt-2 w-72 py-2 rounded-full bg-black items-center justify-center">
            <Text className="text-white text-base font-bold">
              Go to Shopping
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      )}
    </View>
  );
};

export default Cart;
