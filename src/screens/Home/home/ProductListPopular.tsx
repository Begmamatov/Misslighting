import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductsTitle from '../../../components/uikit/ProductsTitle';
import ProductItemCard from './ProductItemCard';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../constants/routes';
import {ProductItemResponse} from '@api/types';
import requests from '@api/requests';

type Props = {
  title: string;
};

export default function ProductList(props: Props) {
  const navigation = useNavigation();
  const [products, setProducts] = useState();

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

  const onPress = () => {
    navigation.navigate(ROUTES.ALLPRODUCTS as never, {props, products});
  };

  return (
    <View>
      <ProductsTitle title={props.title} onPress={onPress} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={({item}) => <ProductItemCard {...item} />}
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginBottom: 15, marginTop: 15},
  contentContainerStyle: {paddingHorizontal: 10},
});
