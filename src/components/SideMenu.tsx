import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {ShoppingCartIcon} from 'react-native-heroicons/solid';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {HomeStackNavigatorParamProps} from '../../type';
import {useSelector} from 'react-redux';

const SideMenu = () => {
  const products = useSelector((state: any) => state.shopper.productData);
  const navigation = useNavigation<HomeStackNavigatorParamProps>();
  const Menudata = [
    {_id: 1, Title: 'Intro', link: 'Intro'},
    {_id: 2, Title: 'Home', link: 'Home'},
    {_id: 3, Title: 'SearchScreen', link: 'SearchScreen'},
    {_id: 4, Title: 'Cart', link: 'Cart'},
    {_id: 5, Title: 'Login', link: 'Login'},
    {_id: 6, Title: 'Payments', link: 'Payments'},
  ];
  return (
    <SafeAreaView>
      <View className="px-2">
        <View className="flex flex-row items-center justify-between">
          <TouchableOpacity onPress={() => navigation.navigate('Products')}>
            <Image
              source={require('../image/bazarLogo.png')}
              className="w-24 h-5"
            />
          </TouchableOpacity>
          <TouchableOpacity
            className="relative"
            onPress={() => navigation.navigate('Cart')}>
            <ShoppingCartIcon size={25} color="#000000" />
            <View className="absolute w-4 h-4 rounded-full left-2 -bottom-1 items-center justify-center bg-blue-700">
              <Text className="text-xs text-white font-medium">
                {' '}
                {products.length ? products.length : 0}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="mt-4">
          {Menudata.map(item => (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.link)}
              className="mb-3 bg-black py-2 px-4 rounded-xl"
              key={item._id}>
              <Text className="text-white text-base font-semibold">
                {item.Title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SideMenu;
