import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import ProductsTitle from '@components/uikit/ProductsTitle';
import ProductItemCard from './ProductItemCard';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '@constants/routes';

export default function ProductList() {
  const products = [1, 2, 3, 4, 5, 6, 7, 8];
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(ROUTES.ALLPRODUCTS as never);
  };

  return (
    <View>
      <ProductsTitle title="Популярные товары" onPress={onPress} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={({item}) => <ProductItemCard />}
        keyExtractor={item => item.toString()}
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
