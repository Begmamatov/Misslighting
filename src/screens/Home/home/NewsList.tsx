import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';

import ShopAndNewsItem from './ShopAndNewsItem';
import ProductsTitle from '../../../components/uikit/ProductsTitle';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../constants/routes';

type ProductListProps = {
  title: string;
  imgRequire?: any;
};

export default function NewsList(props: ProductListProps) {
  const shops = [1, 2, 3, 4, 5, 6, 7, 8];
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
        data={shops}
        renderItem={({item}) => (
          <ShopAndNewsItem
            itemInfo="В текст представили портрет типичного покупателя"
            imgRequire={props.imgRequire}
            buttonTitle="Подробнее"
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
