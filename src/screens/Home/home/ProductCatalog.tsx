import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductsTitle from '../../../components/uikit/ProductsTitle';
import CatalogCartItem from './CatalogCartItem';
import requests from '@api/requests';
import {ProductItemResponse} from '@api/types';

export default function ProductCatalog() {
  const [products, setProducts] = useState<ProductItemResponse[]>([]);

  const getProducts = async () => {
    try {
      let res = await requests.sort.getPopular();
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
        renderItem={({item}) => (
          <CatalogCartItem
            itemInfo={''}
            imgRequire={undefined}
            buttonTitle={''}
            {...item}
          />
        )}
        style={{marginBottom: 15}}
        contentContainerStyle={{paddingHorizontal: 15}}
      />
    </View>
  );
}
