import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { HeartIconActive, HeartIconNotActive, HeartIconRed } from '../../../assets/icons/icons';
import { COLORS } from '../../../constants/colors';
import requests, { assetUrl } from '@api/requests';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '@store/hooks';
import { cartSelector } from '@store/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { favoriteSelector, loadFavorite } from '@store/slices/favoriteSlice';
import { toggleLoading } from '@store/slices/appSettings';

type Props = {
  photo: string;
  itemInfo: string;
  buttonTitle: string;
  id: number;
};

export default function ShopAndNewsItem(props: Props) {
  const navigation = useNavigation();

  const cart = useAppSelector(cartSelector);
  let isInCart = !!cart[props.id];
  const dispatch = useDispatch();
  const fav = useAppSelector(favoriteSelector);
  let isFav = !!fav[props.id];

  const onAddFavorite = async () => {
    try {
      dispatch(toggleLoading(true));
      let res = await requests.favorites.addFavorite({
        product_id: props.id,
      });
      let r = await requests.favorites.getFavorites();
      dispatch(loadFavorite(r.data.data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(toggleLoading(false));
    }
  };
  return (
    <View style={styles.cartItem}>
      <Image style={styles.image} source={{ uri: assetUrl + props.photo }} />
      <TouchableOpacity onPress={onAddFavorite} style={styles.heartIconBox}>
        {isFav ? <HeartIconActive /> : <HeartIconNotActive />}
      </TouchableOpacity>
      <View style={styles.cartItemInfo}>
        <View style={styles.cartItemInfoBox}>
          <Text style={styles.typeText}>{props.itemInfo}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{props.buttonTitle}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    width: 192,
    height: 330,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 15,
    marginBottom: 20,
    flexDirection: 'column',
  },
  image: {
    width: 192,
    height: 156,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  heartIconBox: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  cartItemInfo: {
    paddingHorizontal: 10,
  },
  typeText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.black,
    marginBottom: 10,
  },
  cartItemInfoBox: {
    height: 100,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 42,
    borderRadius: 45,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.textColorBlue,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.textColorBlue,
    marginRight: 10,
  },
});
