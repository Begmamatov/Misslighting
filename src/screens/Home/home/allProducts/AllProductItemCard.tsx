import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../constants/colors';
import {
  BasketIcon,
  HeartIconNotActive,
  HeartIconRed,
} from '../../../../assets/icons/icons';
import requests, {assetUrl} from '@api/requests';
import {useAppSelector} from '@store/hooks';
import {cartSelector} from '@store/slices/cartSlice';
import {useDispatch} from 'react-redux';
import {favoriteSelector, loadFavorite} from '@store/slices/favoriteSlice';
import {toggleLoading} from '@store/slices/appSettings';
type ProductItemCardProps = {
  showNewProduct?: boolean;
  showDiscount?: boolean;
  showDiscountAdd?: boolean;
  imgRequire?: any;
  name?: string;
  price_usd?: number;
  price?: number;
  photo?: string;
  id: number;
};
export default function AllProductItemCard(props: ProductItemCardProps) {
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
      <Image style={styles.image} source={{uri: assetUrl + props.photo}} />
      {props.showDiscount && (
        <View style={styles.sileBox}>
          <Text style={styles.sileText}>10%</Text>
        </View>
      )}
      {props.showNewProduct && (
        <View style={[styles.sileBox, styles.sileBoxBgColor]}>
          <Text style={[styles.sileText, styles.sileTextFS]}>Новый</Text>
        </View>
      )}
      {props.showDiscountAdd && (
        <View style={[styles.sileBox, styles.sileBoxBgColor]}>
          <Text style={[styles.sileText, styles.sileTextFS]}>Под заказ</Text>
        </View>
      )}
      <TouchableOpacity onPress={onAddFavorite} style={styles.heartIconBox}>
        {isFav ? <HeartIconRed fill={COLORS.red} /> : <HeartIconNotActive />}
      </TouchableOpacity>

      <View style={styles.cartItemInfo}>
        <Text style={styles.typeText}>Люстры</Text>
        <Text style={styles.nameText}>{props.name}</Text>
        <Text style={styles.priceTextSile}>{props.price_usd} UZS</Text>
        <Text style={styles.priceText}>{props.price}UZS</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>В корзину</Text>
          <BasketIcon fill={COLORS.textColorBlue} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    width: 162,
    height: 330,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginHorizontal: 10,
    marginBottom: 20,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: 156,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginBottom: 10,
  },
  cartItemInfo: {
    paddingHorizontal: 10,
  },
  typeText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#84A9C0',
  },
  nameText: {
    fontSize: 21,
    fontWeight: '600',
    color: '#3F3535',
    marginBottom: 5,
  },
  priceTextSile: {
    fontSize: 15,
    fontWeight: '400',
    color: COLORS.black,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    opacity: 0.5,
    marginBottom: 5,
  },
  priceText: {
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.black,
    marginBottom: 20,
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
  sileBox: {
    width: 70,
    height: 24,
    backgroundColor: COLORS.TextActiveColor,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  sileText: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.white,
  },
  sileBoxBgColor: {
    backgroundColor: COLORS.textColorBlue,
  },
  sileTextFS: {
    fontSize: 13,
  },
  heartIconBox: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
