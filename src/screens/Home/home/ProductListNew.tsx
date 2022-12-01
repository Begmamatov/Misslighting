import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

import ProductItemCard from './ProductItemCard';
import ProductsTitle from '../../../components/uikit/ProductsTitle';
import {ROUTES} from '../../../constants/routes';
import {useNavigation} from '@react-navigation/native';
import {NewsItemResponse} from '@api/types';
import requests from '@api/requests';

type ProductListProps = {
  title: string;

  showNewProduct?: boolean;
  showDiscount?: boolean;
};

export default function ProductListNew(props: ProductListProps) {
  const [products, setProducts] = useState<any>();
  let effect = async () => {
    try {
      let res = await requests.sort.getNewAdded();
      setProducts(res.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    effect();
  }, []);
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(ROUTES.ALLPRODUCTS as never, {products, props});
  };
  return (
    <View>
      <ProductsTitle title={props.title} onPress={onPress} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={({item}) => (
          <ProductItemCard showNewProduct={true} {...item} />
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
function setNews(data: NewsItemResponse[]) {
  throw new Error('Function not implemented.');
}
