import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';

import ShopAndNewsItem from './ShopAndNewsItem';
import ProductsTitle from '../../../components/uikit/ProductsTitle';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../constants/routes';
import requests from '@api/requests';

type ProductListProps = {
  title: string;
  filter?: boolean;
};

export default function ShopListPopular(props: ProductListProps) {
  const [products, setProducts] = useState<any>();

  const getProducts = async () => {
    try {
      let res = await requests.shops.getShops();
      setProducts(res.data.data);
    } catch (error) {
      console.log('product lest', error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  const navigation = useNavigation();

  const onPress = () => {
    //@ts-ignore
    navigation.navigate(ROUTES.ALLSHOPS as never, {products, props} as never);
  };

  return (
    <View>
      <ProductsTitle title={props.title} onPress={onPress} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={({item, index}) => (
          <ShopAndNewsItem buttonTitle="Посмотреть" item={item} key={index} />
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
