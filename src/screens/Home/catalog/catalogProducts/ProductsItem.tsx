import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ListRenderItemInfo,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import React, { ReactElement, useState } from 'react';
import { COLORS } from '../../../../constants/colors';
import requests, { appendUrl, assetUrl } from '@api/requests';
import { useAppSelector } from '@store/hooks';
import { cartSelector, loadCart } from '@store/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { favoriteSelector, loadFavorite } from '@store/slices/favoriteSlice';
import { toggleLoading } from '@store/slices/appSettings';
import { ProductItemResponse } from '@api/types';
import { useNavigation } from '@react-navigation/native';
import { BasketIcon, HeartIconActive, HeartIconNotActive } from '@icons/icons';
import { STRINGS } from '@locales/strings';

interface Props {
  showNewProduct?: boolean;
  showDiscountAdded?: boolean;
}

const ProductsItem = ({
  item,
  getProducts,
  showNewProduct,
  showDiscountAdded,
}: ListRenderItemInfo<ProductItemResponse> & {
  getProducts?: () => void;
} & Props): ReactElement => {
  let { photo, brand, category, name, price, discount, id, isFavorite } = item;
  console.log('item', item);

  const dispatch = useDispatch();
  let navigation = useNavigation();
  const cart = useAppSelector(cartSelector);
  let isInCart = !!cart[id];
  const fav = useAppSelector(favoriteSelector);
  let isFav = !!fav[id];

  const discountPrice = (price * (100 - discount)) / 100;

  const [animate, setAnimate] = useState(false);

  const onCartPress = async () => {
    console.log('onCartPress');
    if (isInCart) {
      try {
        setAnimate(true);
        let clear = await requests.products.removeItem({
          product_id: id,
        });
        let cartGet = await requests.products.getCarts();
        dispatch(loadCart(cartGet.data.data));
        setAnimate(false);
      } catch (error) {
        console.log(error);
        setAnimate(false);
      }
    } else {
      try {
        setAnimate(true);
        let res = await requests.products.addToCart({
          amount: 1,
          product_id: id,
        });
        if (res.status.toString() === '422') {
          Alert.alert('Кол-во товара на складе меньше чем вы указали');
        }
        let cartRes = await requests.products.getCarts();
        dispatch(loadCart(cartRes.data.data));
        setAnimate(false);
      } catch (error) {
        Alert.alert('Кол-во товара на складе меньше чем вы указали');
      } finally {
        setAnimate(false);
      }
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
    }
  };
  return (
    <TouchableWithoutFeedback
      style={styles.cartItem}
      onPress={() => {
        //@ts-ignore
        navigation.navigate(ROUTES.PRODUCT_DETAILS, { item, id });
      }}>
      <Image style={styles.image} source={{ uri: appendUrl(photo) }} />
      {discount ? (
        <View style={styles.sileBox}>
          <Text style={styles.sileText}>10%</Text>
        </View>
      ) : null}
      {showNewProduct && (
        <View style={[styles.sileBox, styles.sileBoxBgColor]}>
          <Text style={[styles.sileText, styles.sileTextFS]}>Новый</Text>
        </View>
      )}
      {showDiscountAdded && (
        <View style={[styles.sileBox, styles.sileBoxBgColor]}>
          <Text style={[styles.sileText, styles.sileTextFS]}>Под заказ</Text>
        </View>
      )}
      <TouchableOpacity onPress={onAddFavorite} style={styles.heartIconBox}>
        {isFav ? <HeartIconActive /> : <HeartIconNotActive />}
      </TouchableOpacity>

      <View style={styles.cartItemInfo}>
        <Text style={styles.typeText}>{category?.name || ''}</Text>
        <Text style={styles.nameText}>{name || ''}</Text>
        {discount ? (
          <Text style={styles.priceTextSile}>{discountPrice} UZS</Text>
        ) : null}
        <Text style={styles.priceText}>{price}UZS</Text>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: isInCart ? '#84A9C0' : '#FFFFFF' },
          ]}
          onPress={onCartPress}>
          {animate ? (
            <ActivityIndicator
              size="small"
              color={isInCart ? '#fff' : '#84A9C0'}
              animating={animate}
            />
          ) : (
            <View style={styles.buttonContainer}>
              <Text
                style={[isInCart ? styles.cartText : styles.inactiveCartText]}>
                {isInCart
                  ? `${STRINGS.ru.addToCart}е`
                  : `${STRINGS.ru.addToCart}у`}
              </Text>
              <BasketIcon fill={isInCart ? COLORS.white : '#84A9C0'} />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductsItem;

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
  buttonContainer: {
    flexDirection: 'row',
  },
  cartText: {
    color: COLORS.white,
    marginRight: 4,
    fontWeight: '700',
    fontSize: 15,
  },
  inactiveCartText: {
    color: '#84A9C0',
    marginRight: 8,

    fontWeight: '700',
    fontSize: 15,
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
