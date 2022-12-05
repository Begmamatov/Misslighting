import requests, { appendUrl } from '@api/requests';
import { ProductItemResponse } from '@api/types';

import { COLORS } from '@constants/colors';
import { ROUTES } from '@constants/routes';
import { BasketIcon, CloseIcon } from '@icons/icons';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '@store/hooks';
import { toggleLoading } from '@store/slices/appSettings';
import { cartSelector, loadCart } from '@store/slices/cartSlice';
import { favoriteSelector, loadFavorite } from '@store/slices/favoriteSlice';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  LayoutAnimation,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native';
import { useDispatch } from 'react-redux';

const Products = ({ item }: { item: ProductItemResponse }) => {
  let { photo, name, price, discount, price_usd, id, isFavorite, category } = item;

  const dispatch = useDispatch();
  const cart = useAppSelector(cartSelector);
  const favorite = useAppSelector(favoriteSelector);
  let isInCart = !!cart[id];
  let isInFavorite = !!favorite[id];

  const navigation: any = useNavigation();
  const [animate, setAnimate] = useState(false);
  const discountPrice = (price * (100 - discount)) / 100;

  const onCartPress = async () => {
    try {
      if (isInCart) {
        //TODO remove from cart
        try {
          setAnimate(true);
          let res = await requests.products.removeItem({
            product_id: id,
          });
          let cartRes = await requests.products.getCarts();
          dispatch(loadCart(cartRes.data.data));
          setAnimate(false);
        } catch (error) {
          console.log(error);
        } finally {
          effect();
        }
      } else {
        setAnimate(true);
        let res = await requests.products.addToCart({
          amount: 1,
          product_id: id,
        });
        let cartRes = await requests.products.getCarts();
        dispatch(loadCart(cartRes.data.data));
        setAnimate(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      effect();
    }
  };

  const effect = async () => {
    try {
      let res = await requests.favorites.getFavorites();
      // setFavorites(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onAddFavorite = async () => {
    try {
      dispatch(toggleLoading(true));
      let res = await requests.favorites.addFavorite({
        product_id: id,
      });
      let r = await requests.favorites.getFavorites();
      dispatch(loadFavorite(r.data.data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(toggleLoading(false));
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate(ROUTES.PRODUCTDETAILS, { props: item });
      }}>
      <View style={styles.container}>
        <Image source={{ uri: appendUrl(photo) }} style={styles.image} />
        <View style={styles.itemsContainer}>
          <View style={styles.nameContainer}>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 13,
                color: ' #C8C8C8',
              }}>
              {category.name}
            </Text>
            <Text style={styles.itemName}>{name ? name : ''}</Text>
            {discount ? (
              <Text style={styles.oldPrice}>{discount ? price : discountPrice} сум</Text>
            ) : null}
            <Text style={styles.price}>{discount ? discountPrice : price} сум</Text>
          </View>
          <View style={styles.priceContainer}>
            <TouchableOpacity
              onPress={onAddFavorite}
              hitSlop={{ bottom: 10, top: 10, right: 10, left: 10 }}>
              <CloseIcon />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: isInCart ? '#84A9C0' : '#FFFFFF' },
              ]}
              onPress={onCartPress}>
              {animate ? (
                <ActivityIndicator
                  size="small"
                  color={isInCart ? '#FFFFFF' : '#84A9C0'}
                  animating={animate}
                />
              ) : (
                <View style={styles.buttonContainer}>
                  <BasketIcon fill={isInCart ? COLORS.white : '#84A9C0'} />
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    marginVertical: 9,
    backgroundColor: '#FFFFFF',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: 10,
  },

  image: {
    width: 91,
    height: 92,
    borderRadius: 10,
    marginHorizontal: 10,
  },

  itemsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

    // paddingHorizontal: 5,
  },
  priceContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 10,
  },

  nameContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  itemName: {
    color: COLORS.defaultBlack,
    fontSize: 21,
    fontWeight: '600',
    lineHeight: 40,
  },

  dscountText: {
    fontSize: 12,
    color: COLORS.red,
  },

  discount: {
    borderRadius: 8,
    padding: 4,
    backgroundColor: COLORS.white,
  },

  price: {
    fontSize: 16,
    color: COLORS.red,
  },

  oldPrice: {
    fontSize: 14,
    color: COLORS.defaultBlack,
    textDecorationLine: 'line-through',
  },

  buttonContainer: {
    flexDirection: 'row',
    margin: 0,
  },

  cartText: {
    color: COLORS.white,
    marginRight: 10,
  },

  inactiveCartText: {
    color: COLORS.cartColor3,
    marginRight: 10,
  },

  button: {
    borderRadius: 5,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: COLORS.textColorBlue,
    padding: 6,
  },
});
