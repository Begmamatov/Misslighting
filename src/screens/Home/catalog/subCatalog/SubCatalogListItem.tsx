import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '@constants/routes';
import {Category} from '@api/types';
import {appendUrl} from '@api/requests';
import {Dimensions} from 'react-native';

const SubCatalogListItem = ({
  item: {photo, name, id},
}: ListRenderItemInfo<Category>) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cartItem}
      onPress={() =>
        navigation.navigate(
          ROUTES.CATALOG_PRODUCTS as never,
          {id, name, type: 'category'} as never,
        )
      }>
      <Image style={styles.image} source={{uri: appendUrl(photo as any)}} />
      <Text style={styles.title}>{name ? name : ''}</Text>
    </TouchableOpacity>
  );
};

export default SubCatalogListItem;

const styles = StyleSheet.create({
  cartItem: {
    width: Dimensions.get('screen').width / 3 - 30,
    height: 165,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: 'column',
    marginRight: 20,
  },
  image: {
    width: '100%',
    height: 113,
    borderRadius: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
});
