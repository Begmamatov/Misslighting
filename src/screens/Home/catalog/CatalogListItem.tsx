import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../constants/routes';

type Props = {
  title: string;
  image: any;
};

export default function CatalogListItem(props: Props) {
  const navivation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cartItem}
      onPress={() => navivation.navigate(ROUTES.SUBCATEGORY as never, props)}>
      <Image style={styles.image} source={props.image} />
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    width: 110,
    height: 165,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 10,
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
