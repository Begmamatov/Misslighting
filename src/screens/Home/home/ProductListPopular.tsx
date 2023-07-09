import {View, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductsTitle from '../../../components/uikit/ProductsTitle';
import ProductItemCard from './ProductItemCard';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../constants/routes';
import requests from '@api/requests';
import useLoading from '@store/Loader/useLoading';

type Props = {
  title: string;
  filter?: boolean;
};

export default function ProductList(props: Props) {
  const navigation = useNavigation();
  const [products, setProducts] = useState<any>([]);
  const loading = useLoading();

  const getProducts = async () => {
    try {
      loading?.onRun();
      let res = await requests.sort.getSortAll('popular');
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

  const onPress = () => {
    navigation.navigate(
      //@ts-ignore
      ROUTES.ALLPRODUCTS as never,
      {props, products} as never,
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
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginBottom: 15, marginTop: 15},
  contentContainerStyle: {paddingHorizontal: 10},
});
