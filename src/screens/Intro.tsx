import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {HomeStackNavigatorParamProps} from '../../type';
import * as Animatable from 'react-native-animatable';

const Intro = ({navigation}: HomeStackNavigatorParamProps) => {
  return (
    <View className="w-full h-screen bg-black px-4 items-center justify-center">
      <View className="relative h-80 w-full items-center justify-center">
        <View className="absolute w-80 h-80 rounded-full border border-gray-400"></View>
        <View className="absolute top-4 w-72 h-72 rounded-full border border-gray-400"></View>
        <View className="absolute top-8 w-64 h-64 rounded-full border border-gray-400"></View>
        <View className="absolute top-12 w-56 h-56 rounded-full border border-gray-400"></View>
        <View className="absolute top-16 w-48 h-48 rounded-full border border-gray-400"></View>
        <Image
          source={require('../image/intro.png')}
          className="w-full h-full -mt-6 object-contain"
        />
      </View>

      <View className="py-20">
        <Text className="text-white text-4xl text-center font-extrabold">
          Great way to lift up your style!
        </Text>
        <Text className="text-gray-200 text-base text-center mt-4 leading-6">
          Complete your style with awesome shoes and sneakers from us
        </Text>
      </View>
      <TouchableOpacity
        className="w-full"
        onPress={() => navigation.navigate('Home')}>
        <Animatable.View
          animation="slideInUp"
          iterationCount={1}
          direction="alternate"
          duration={700}
          className="bg-white w-full h-12 rounded-full items-center justify-center">
          <Text className="text-black font-bold text-base">Get Started</Text>
        </Animatable.View>
      </TouchableOpacity>
    </View>
  );
};

export default Intro;
