import {Text, SafeAreaView, View} from 'react-native';
import React, {ReactNode} from 'react';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {HomeStackNavigatorParamProps} from '../../type';
import {ShoppingCartIcon} from 'react-native-heroicons/solid';

type Props = {
  title: string;
  icon: ReactNode;
  itemQuantity: number;
};

const CommonHeader = ({title, icon, itemQuantity}: Props) => {
  const navigation = useNavigation<HomeStackNavigatorParamProps>();
  return (
    <SafeAreaView>
      <View className="flex-row items-center justify-between border-b-[1px] border-b-gray-400 py-2">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="flex-row items-center">
          <ArrowLeftIcon size={25} color="#000000" />
          <Text className="text-base font-semibold ml-3">{title}</Text>
        </TouchableOpacity>
        {icon && (
          <TouchableOpacity
            className="relative"
            onPress={() => navigation.navigate('Cart')}>
            <ShoppingCartIcon size={25} color="#000000" />
            <View className="absolute w-4 h-4 rounded-full left-2 -bottom-1 items-center justify-center bg-blue-700">
              <Text className="text-xs text-white font-medium">
                {itemQuantity ? itemQuantity : 0}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CommonHeader;
