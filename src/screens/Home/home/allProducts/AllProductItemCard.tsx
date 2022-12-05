import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Dimensions,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../../../../constants/colors';
import {
  BasketIcon,
  HeartIconActive,
  HeartIconNotActive,
} from '../../../../assets/icons/icons';
import requests, { assetUrl } from '@api/requests';
import { useAppSelector } from '@store/hooks';
import { cartSelector, loadCart } from '@store/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { favoriteSelector, loadFavorite } from '@store/slices/favoriteSlice';
import { STRINGS } from '@locales/strings';

type ProductItemCardProps = {
  showNewProduct?: boolean;
  showDiscount?: boolean;
  showDiscountAdd?: boolean;
  price: number;
  price_usd?: number;
  id: number;
  discount: number;
  brand?: string;
  shop?: string;
  category: {
    name?: string;
  };
  name: string;
  photo: string;
  isFavorite?: boolean;
  getProducts?: () => void;
};

const AllProductItemCard = (props: ProductItemCardProps) => {
  let {
    photo,
    brand,
    shop,
    category,
    name,
    price,
    discount,
    id,
    isFavorite,
    price_usd,
    showDiscount,
    showDiscountAdd,
    showNewProduct,
  } = props;

  const [animate, setAnimate] = useState(false);
  const cart = useAppSelector(cartSelector);
  let isInCart = !!cart[id];
  const dispatch = useDispatch();
  const fav = useAppSelector(favoriteSelector);
  let isFav = !!fav[id];
  const discountPrice = (price * (100 - discount)) / 100;

  const onAddFavorite = async () => {
    try {
      let res = await requests.favorites.addFavorite({
        product_id: id,
      });
      let r = await requests.favorites.getFavorites();
      dispatch(loadFavorite(r.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  const onCartPress = async () => {
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

  return (
    <TouchableWithoutFeedback>
      <View style={styles.cartItem}>
        <Image style={styles.image} source={{ uri: assetUrl + props.photo }} />
        {props.showDiscount ? (
          <View style={styles.sileBox}>
            <Text style={styles.sileText}>{discount} %</Text>
          </View>
        ) : null}
        {showNewProduct ? (
          <View style={[styles.sileBox, styles.sileBoxBgColor]}>
            <Text style={[styles.sileText, styles.sileTextFS]}>Новый</Text>
          </View>
        ) : null}
        {showDiscountAdd ? (
          <View style={[styles.sileBox, styles.sileBoxBgColor]}>
            <Text style={[styles.sileText, styles.sileTextFS]}>Под заказ</Text>
          </View>
        ) : null}
        <TouchableOpacity onPress={onAddFavorite} style={styles.heartIconBox}>
          {isFav ? <HeartIconActive /> : <HeartIconNotActive />}
        </TouchableOpacity>

        <View style={styles.cartItemInfo}>
          <View style={{ height: 120 }}>
            <Text style={styles.typeText}>{category.name || ''}</Text>
            <Text style={styles.nameText}>{name || ''}</Text>
            {discount ? (
              <Text style={styles.priceTextSile}>
                {discount ? price : discountPrice} UZS
              </Text>
            ) : null}
            <Text style={styles.priceText}>
              {discount ? discountPrice : price}UZS
            </Text>
          </View>
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
                  style={[
                    isInCart ? styles.cartText : styles.inactiveCartText,
                  ]}>
                  {isInCart
                    ? `${STRINGS.ru.addToCart}е`
                    : `${STRINGS.ru.addToCart}у`}
                </Text>
                <BasketIcon fill={isInCart ? COLORS.white : '#84A9C0'} />
              </View>
            )}
          </TouchableOpacity>

          <View style={styles.cartItemInfo}>
            <View style={{ height: 120 }}>
              <Text style={styles.typeText}>Люстры</Text>
              <Text style={styles.nameText}>{props.name}</Text>
              {props.price_usd && (
                <Text style={styles.priceTextSile}>{props.price_usd} UZS</Text>
              )}
              <Text style={styles.priceText}>{props.price}UZS</Text>
            </View>
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: isInCart ? '#84A9C0' : '#FFFFFF' },
              ]}
              onPress={onCartPress}>
              {animate ? (
                <ActivityIndicator
                  size="small"
                  color={'#84A9C0'}
                  animating={animate}
                />
              ) : (
                <View style={styles.buttonContainer}>
                  <Text
                    style={[
                      isInCart ? styles.cartText : styles.inactiveCartText,
                    ]}>
                    {isInCart
                      ? `${STRINGS.ru.addToCart}е`
                      : `${STRINGS.ru.addToCart}у`}
                  </Text>
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

export default AllProductItemCard;

const styles = StyleSheet.create({
  cartItem: {
    // width: 162,
    height: 330,
    width: Dimensions.get('screen').width / 2 - 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 10,
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
    width: Dimensions.get('screen').width / 2 - 20,
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
