import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';

import ShopAndNewsItem from './ShopAndNewsItem';
import ProductsTitle from '../../../components/uikit/ProductsTitle';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../constants/routes';
import requests from '@api/requests';
import useLoading from '@store/Loader/useLoading';
import NewsItemDetail from './NewsItemDetail';

type ProductListProps = {
  title: string;
  filter?: boolean;
};

export default function NewsList(props: ProductListProps) {
  const [products, setProducts] = useState<any>();
  const loading = useLoading();

  const getProducts = async () => {
    try {
      loading?.onRun();
      let res = await requests.news.getNews();
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
    navigation.navigate(ROUTES.ALLNEWS as never, {products, props} as never);
  };

  return (
    <View>
      <ProductsTitle title={props.title} onPress={onPress} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={({item}) => (
          <NewsItemDetail buttonTitle="Подробнее" item={item} />
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
