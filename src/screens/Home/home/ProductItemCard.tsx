import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {
  BasketIcon,
  HeartIconBorder,
  HeartIconNotActive,
  HeartIconRed,
} from '../../../assets/icons/icons';
import {COLORS} from '../../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../constants/routes';
import requests, {assetUrl} from '@api/requests';
import {favoriteSelector, loadFavorite} from '@store/slices/favoriteSlice';
import {toggleLoading} from '@store/slices/appSettings';
import {useAppSelector} from '@store/hooks';
import {cartSelector, loadCart} from '@store/slices/cartSlice';
import {useDispatch} from 'react-redux';
import {STRINGS} from '@locales/strings';

export type ProductItemCardProps = {
  name?: string;
  photo?: string;
  showNewProduct?: boolean;
  showDiscount?: boolean;
  showDiscountAdd?: boolean;

  price?: number;
  price_usd?: number;
  id: number;
};

export default function ProductItemCard(props: ProductItemCardProps) {
  const navigation = useNavigation();
  const [colorActive, setColarActive] = useState(false);
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
  const [animate, setAnimate] = useState(false);
  const onCartPress = async () => {
    if (isInCart) {
      try {
        setAnimate(true);
        let cartGet = await requests.products.getCarts();
        dispatch(loadCart(cartGet.data.data));
        setColarActive(true);
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
          product_id: props.id,
        });

        let cartRes = await requests.products.getCarts();
        dispatch(loadCart(cartRes.data.data));
        setColarActive(true);
        setAnimate(false);
      } catch (error) {
        console.log('erorrs++++', JSON.stringify(error, null, 4));
        alert(JSON.stringify(error, null, 4));
      } finally {
        setAnimate(false);
        setColarActive(true);
      }
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        //@ts-ignore
        navigation.navigate(ROUTES.PRODUCTDETAILS, {props})
      }>
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
          <Text style={styles.priceTextSile}>{props.price_usd}UZS</Text>
          <Text style={styles.priceText}>{props.price} UZS</Text>

          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: isInCart ? '#84A9C0' : '#FFFFFF'},
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    width: 192,
    height: 330,
    backgroundColor: '#fff',
    // borderRadius: 15,
    marginRight: 15,
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
    width: 192,
    height: 156,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginBottom: 10,
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
  sileBoxBgColor: {
    backgroundColor: COLORS.textColorBlue,
  },
  sileText: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.white,
  },
  sileTextFS: {
    fontSize: 13,
  },
});
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
