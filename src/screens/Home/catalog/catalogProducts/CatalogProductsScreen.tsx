import {View, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import GoBackHeader from '@components/uikit/Header/GoBackHeader';
import AllProductTitle from '@components/uikit/AllProductTitle';
import SortAndFilter from '@components/uikit/SortAndFilter';
import {COLORS} from '@constants/colors';
import {ProductItemResponse} from '@api/types';
import requests from '@api/requests';
import ProductsItem from './ProductsItem';
import LoadingModal from '@components/uikit/LoadingModal/LoadingModal';

const CatalogProductsScreen = () => {
  const [products, setProducts] = useState<ProductItemResponse[]>();
  const [loading, setLoading] = useState(true);

  let {
    params: {id, name, type},
  }: any = useRoute();

  let effect = async () => {
    try {
      setLoading(true);
      let res = await requests.products.getProductsWithID(id);
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  let brandsEffect = async () => {
    try {
      setLoading(true);
      let res = await requests.products.getProductsWithBrand(id);
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  let shopEffect = async () => {
    try {
      setLoading(true);
      let res = await requests.products.getProductWithShopID(id);
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (type === 'brand') {
      brandsEffect();
    }
    if (type === 'category') {
      effect();
    }
    if (type === 'shop') {
      shopEffect();
    }
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{marginBottom: 10}}>
          <GoBackHeader />
          <AllProductTitle title={name} />
          <SortAndFilter />
        </View>
        {loading ? (
          <LoadingModal />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={products}
            renderItem={props => <ProductsItem {...props} />}
            numColumns={2}
            style={styles.container2}
            contentContainerStyle={styles.contentContainerStyle}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default CatalogProductsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: '100%',
    height: '100%',
  },
  render_container: {
    position: 'relative',
    width: '100%',
    marginTop: 29,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  container2: {marginBottom: 15},
  contentContainerStyle: {paddingHorizontal: 10},
});
