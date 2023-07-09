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
import {ROUTES} from '../../../constants/routes';
import {Category} from '@api/types';
import {appendUrl} from '@api/requests';
import {Dimensions} from 'react-native';

const CatalogListItem = ({
  item: {photo, name, id},
}: ListRenderItemInfo<Category>) => {
  const navivation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.cartItem}
      onPress={() =>
        //@ts-ignore
        navivation.navigate(ROUTES.SUBCATEGORY as never, {id, name} as never)
      }>
      <Image style={styles.image} source={{uri: appendUrl(photo as any)}} />
      <Text style={styles.title}>{name ? name : ''}</Text>
    </TouchableOpacity>
  );
};

export default CatalogListItem;

const styles = StyleSheet.create({
  cartItem: {
    width: Dimensions.get('screen').width / 3 - 30,
    height: 165,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 10,
    marginLeft: 15,
    flexDirection: 'column',
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
