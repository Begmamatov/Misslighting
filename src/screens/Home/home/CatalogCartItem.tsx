import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {assetUrl} from '@api/requests';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '@constants/routes';

type Props = {
  photo?: string;
  name?: string;
  id?: number;
};
export default function CatalogCartItem(props: Props) {
  let {id, name, photo} = props;

  const navivation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        //@ts-ignore
        navivation.navigate(ROUTES.SUBCATEGORY as never, {id, name} as never)
      }
      style={styles.cartItem}>
      <Image style={styles.image} source={{uri: assetUrl + photo}} />
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    width: 192,
    height: 208,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 20,
    marginBottom: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#d0d0d0',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 192,
    height: 171,
    borderRadius: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
  },
});
