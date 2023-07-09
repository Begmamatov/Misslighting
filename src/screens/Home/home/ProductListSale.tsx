import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import requests from '@api/requests';
import {useNavigation} from '@react-navigation/native';
import useLoading from '@store/Loader/useLoading';
import ProductsTitle from '../../../components/uikit/ProductsTitle';
import {ROUTES} from '../../../constants/routes';
import ProductItemCard from './ProductItemCard';

type ProductListProps = {
  title: string;

  filter?: boolean;
};

export default function ProductListSale(props: ProductListProps) {
  const [products, setProducts] = useState();
  const loading = useLoading();

  const getProducts = async () => {
    try {
      loading?.onRun();
      let res = await requests.sort.getCheap();
      setProducts(res.data.data);
    } catch (error) {
      console.log('product lest', error);
    } finally {
      loading?.onClose();
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(
      //@ts-ignore
      ROUTES.ALLPRODUCTS as never,
      {products, props} as never,
    );
  };
  return (
    <View>
      <ProductsTitle title={props.title} onPress={onPress} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={({item}) => <ProductItemCard {...item} />}
        keyExtractor={item => item.id}
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginBottom: 15},
  contentContainerStyle: {paddingHorizontal: 10},
});
