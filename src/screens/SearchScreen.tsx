import {
  View,
  TextInput,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {MagnifyingGlassIcon} from 'react-native-heroicons/solid';
import CommonHeader from '../components/CommonHeader';
import {useSelector} from 'react-redux';
import {ProductsData, HomeStackNavigatorParamProps} from '../../type';
import FormattedPrice from '../components/FormattedPrice';

const SearchScreen = ({navigation}: HomeStackNavigatorParamProps) => {
  const allProducts = useSelector(
    (state: any) => state.shopper.allProducts.item,
  );
  const serachInputRef = useRef<TextInput>(null);
  useEffect(() => {
    serachInputRef?.current?.focus();
  }, []);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (query: any) => {
    setSearchQuery(query);
  };
  useEffect(() => {
    const filtered = allProducts.filter((product: ProductsData) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredProducts(filtered);
  }, [searchQuery, allProducts]);

  return (
    <View className="px-2">
      <CommonHeader title="Search" icon={null} itemQuantity={0} />
      <View>
        <View className="py-2 px-4 mt-2 border-[1px] border-gray-600 rounded-full flex-row">
          <TextInput
            className="flex-1 text-black placeholder:text-gray-700"
            placeholder="Seach your products here"
            ref={serachInputRef}
            value={searchQuery}
            onChangeText={handleSearch}
          />
          <MagnifyingGlassIcon size={25} color="gray" />
        </View>
      </View>
      <ScrollView>
        <View className="mt-2">
          {searchQuery ? (
            filteredProducts.map((product: ProductsData) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ProductDetails', {
                    item: product,
                  })
                }
                key={product._id}
                className="w-full bg-white mb-4 p-2 flex-row items-center">
                <Image source={{uri: product.image}} className="w-1/4 h-20" />
                <View className="ml-1 w-3/4">
                  <Text className="text-base font-semibold">
                    {product.title}
                  </Text>
                  <Text className="w-72 text-xs text-gray-800">
                    {product.des.substring(0, 50)}
                  </Text>
                  <Text>
                    Price: <FormattedPrice amount={product.price} />
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <View className="w-full h-32 bg-white flex-row items-center justify-center">
              <MagnifyingGlassIcon size={30} color="gray" />
              <Text className="text-lg font-semibold text-gray-500 ml-2">
                Your search item will appear here
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
