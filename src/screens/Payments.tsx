import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonHeader from '../components/CommonHeader';
import {useSelector} from 'react-redux';
import {ProductsData} from '../../type';
import FormattedPrice from '../components/FormattedPrice';
import {CurrencyDollarIcon} from 'react-native-heroicons/solid';

const Payments = () => {
  const [totalAmt, setTotalAmt] = useState<number>(0);
  const products = useSelector((state: any) => state.shopper.productData);
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
      <CommonHeader title="Payment gateway" icon={null} itemQuantity={0} />
      <View className="p-6">
        <View className="flex-row items-center justify-between">
          <Text className="text-base font-medium">Products</Text>
          <Text className="text-base text-gray-950 font-semibold">
            {products.length}
          </Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-base font-medium">Amount</Text>
          <FormattedPrice amount={totalAmt} />
        </View>
        <View className="flex-row items-center justify-between border-b-[1px] border-b-gray-400 pb-1">
          <Text className="text-base font-medium">Delivery Amount</Text>
          <FormattedPrice amount={deliveryPrice} />
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-base font-medium">Total Amount</Text>
          <FormattedPrice amount={totalAmt + deliveryPrice} />
        </View>
        <TouchableOpacity className="mt-6 w-full bg-black h-12 rounded-full flex-row items-center justify-center">
          <CurrencyDollarIcon size={25} color="#FFFFFF" />
          <Text className="text-white text-lg font-semibold text-center ml-3">
            Pay with Stripe
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payments;
