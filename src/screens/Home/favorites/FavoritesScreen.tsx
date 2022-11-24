import {View, Text, FlatList, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import ProductsTitle from '../../../components/uikit/ProductsTitle';
import FavoriteListItem from './FavoriteListItem';
import AllProductItemCard from '../home/allProducts/AllProductItemCard';

export default function FavoritesScreen() {
  const CartArray = [1, 2, 3, 4];
  const CartArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <View>
      <ProductsTitle title="Избранные" showButton={false} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <FlatList
          data={CartArray}
          renderItem={({item}) => <FavoriteListItem />}
          showsVerticalScrollIndicator={false}
          style={{marginBottom: 20}}
        />
        <ProductsTitle title="Рекламный блок" showButton={false} />
        <View style={styles.render_container}>
          <FlatList
            data={CartArray2}
            renderItem={({item}) => <AllProductItemCard />}
            numColumns={2}
            style={{marginBottom: 20}}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 20,
  },
  render_container: {
    position: 'relative',
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginBottom: 50,
  },
});
