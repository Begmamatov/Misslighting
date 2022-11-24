import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

import ProductItemCard from './ProductItemCard';
import ProductsTitle from '../../../components/uikit/ProductsTitle';
import {ROUTES} from '../../../constants/routes';
import {useNavigation} from '@react-navigation/native';

type ProductListProps = {
  title: string;
  imgRequire?: any;
  showNewProduct?: boolean;
  showDiscount?: boolean;
};

export default function ProductListNew(props: ProductListProps) {
  const products = [1, 2, 3, 4, 5, 6, 7, 8];
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(ROUTES.ALLPRODUCTS as never, props);
  };
  return (
    <View>
      <ProductsTitle title={props.title} onPress={onPress} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={({item}) => (
          <ProductItemCard
            showNewProduct={true}
            imgRequire={props.imgRequire}
          />
        )}
        keyExtractor={item => item.toString()}
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
