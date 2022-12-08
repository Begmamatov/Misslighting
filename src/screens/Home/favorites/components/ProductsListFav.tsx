import requests from '@api/requests';
import {COLORS} from '@constants/colors';
import AllProductItemCard from '@home/home/allProducts/AllProductItemCard';
import {STRINGS} from '@locales/strings';
import useLoading from '@store/Loader/useLoading';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

export interface PropularProductsProps {
  title?: string;
}
const ProductsListFav = ({
  title = STRINGS.ru.popularProducts,
}: PropularProductsProps) => {
  const [products, setProducts] = useState();
  const loading = useLoading();

  const getProducts = async () => {
    try {
      loading?.onRun();
      let res = await requests.sort.getPopular();
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
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={products}
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <AllProductItemCard {...item} />}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ProductsListFav;

const styles = StyleSheet.create({
  title: {
    color: COLORS.defaultBlack,
    fontSize: 19,
    marginLeft: 16,
    marginBottom: 20,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  container: {marginBottom: 20, marginHorizontal: 0},
  contentContainerStyle: {paddingHorizontal: 12},
});
