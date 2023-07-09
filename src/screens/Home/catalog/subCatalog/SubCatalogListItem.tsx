import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '@constants/routes';
// import {Category} from '@api/types';s
import {appendUrl} from '@api/requests';
import {Dimensions} from 'react-native';

const SubCatalogListItem = ({props, id}: any) => {
  const navigation = useNavigation();
  let {item} = props;

  return (
    <TouchableOpacity
      style={styles.cartItem}
      onPress={() =>
        navigation.navigate(
          //@ts-ignore
          ROUTES.CATALOG_PRODUCTS as never,
          {id: item.id, type: id, name: item.name} as never,
        )
      }>
      <Image
        style={styles.image}
        source={{uri: appendUrl(item.photo as any)}}
      />
      <Text style={styles.title}>{item.name ? item.name : ''}</Text>
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
