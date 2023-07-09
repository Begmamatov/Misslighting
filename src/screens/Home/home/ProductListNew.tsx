import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

import ProductItemCard from './ProductItemCard';
import ProductsTitle from '../../../components/uikit/ProductsTitle';
import {ROUTES} from '../../../constants/routes';
import {useNavigation} from '@react-navigation/native';
import requests from '@api/requests';
import useLoading from '@store/Loader/useLoading';

type ProductListProps = {
  title: string;
  filter?: boolean;
  showNewProduct?: boolean;
};

export default function ProductListNew(props: ProductListProps) {
  const [products, setProducts] = useState();
  const loading = useLoading();
  let effect = async () => {
    try {
      loading?.onRun();
      let res = await requests.sort.getSortAll('new');
      setProducts(res.data.data);
    } catch (error) {
      console.log('product lest', error);
    } finally {
      loading?.onClose();
    }
  };
  useEffect(() => {
    effect();
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
        renderItem={({item}) => (
          <ProductItemCard {...item} showNewProduct={true} />
        )}
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
