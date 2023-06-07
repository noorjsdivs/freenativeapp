import {View, Text, Image} from 'react-native';
import React from 'react';
import CommonHeader from '../components/CommonHeader';

const Login = () => {
  return (
    <View className="px-2">
      <CommonHeader title="Login" icon={null} itemQuantity={0} />
      <View className="py-4">
        <Image
          source={require('../image/bazarLogo.png')}
          className="w-24 h-5"
        />

        <Text className="text-base text-gray-700">
          Login credential will go here
        </Text>
      </View>
    </View>
  );
};

export default Login;
