import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackNavigatorParamList} from '../../type';
import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails';
import Cart from '../screens/Cart';
import Payments from '../screens/Payments';
import Login from '../screens/Login';
import SearchScreen from '../screens/SearchScreen';
import Intro from '../screens/Intro';

const RootStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const StackNavigation = () => {
  return (
    <RootStack.Navigator initialRouteName="Intro">
      <RootStack.Screen
        name="Intro"
        component={Intro}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Payments"
        component={Payments}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default StackNavigation;
