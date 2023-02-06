import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductsTitle from '../../../components/uikit/ProductsTitle';
import CatalogCartItem from './CatalogCartItem';
import requests from '@api/requests';

export default function ProductCatalog() {
  const [products, setProducts] = useState<any>();

  const getProducts = async () => {
    try {
      let res = await requests.categories.getCategories();
      setProducts(res.data.data);
    } catch (error) {
      console.log('product lest', error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View>
      <ProductsTitle title="Популярные категории" showButton={false} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={({item}) => <CatalogCartItem {...item} />}
        keyExtractor={item => item.id}
        style={{marginBottom: 15}}
        contentContainerStyle={{paddingHorizontal: 15}}
      />
    </View>
  );
}
