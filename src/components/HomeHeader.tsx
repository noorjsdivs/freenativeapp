import {View, Text, SafeAreaView, TextInput, Image} from 'react-native';
import React from 'react';
import {
  ShoppingCartIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/solid';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {HomeStackNavigatorParamProps} from '../../type';
import {useSelector} from 'react-redux';

const HomeHeader = ({navigation}: HomeStackNavigatorParamProps) => {
  const products = useSelector((state: any) => state.shopper.productData);
  const ShowMenu = () => {
    navigation.openDrawer();
  };
  return (
    <SafeAreaView>
      <View className="flex-row items-center justify-between py-2">
        <TouchableOpacity
          className="border-[1px] border-gray-300 p-1 rounded-full"
          onPress={ShowMenu}>
          <Bars3Icon size={25} color="#000000" />
        </TouchableOpacity>
        <Image
          source={require('../image/bazarLogo.png')}
          className="w-20 h-4"
        />
        <TouchableOpacity
          className="relative"
          onPress={() => navigation.navigate('Cart')}>
          <ShoppingCartIcon size={25} color="#000000" />
          <View className="absolute w-4 h-4 rounded-full left-2 -bottom-1 items-center justify-center bg-blue-700">
            <Text className="text-xs text-white font-medium">
              {products.length ? products.length : 0}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('SearchScreen')}
        className="flex-row border-[1px] border-gray-300 rounded-lg items-center h-10 px-4">
        <Text className="text-gray-500 flex-1">Search your products here</Text>
        <MagnifyingGlassIcon size={25} color="gray" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeHeader;
