/// <reference types="nativewind/types" />

import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
  Intro: undefined;
  Home: undefined;
  ProductDetails: undefined;
  Cart: undefined;
  Payments: undefined;
  Login: undefined;
  SearchScreen: undefined;
};

export type HomeStackNavigatorParamProps = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Intro',
  'Home',
  'ProductsDetails',
  'Cart',
  'Payments',
  'Login',
  'SearchScreen'
>;

export interface ProductsData {
  _id: number;
  title: string;
  image: string;
  des: string;
  price: string;
  oldPrice: string;
  isNew: boolean;
  category: string;
  brand: string;
  quantity: number;
}
export interface StoreProduct {
  _id: number;
  title: string;
  image: string;
  des: string;
  price: string;
  oldPrice: string;
  isNew: boolean;
  category: string;
  brand: string;
  quantity: number;
}

export interface UserInfo {
  _id: string;
  name: string;
  email: string;
}
