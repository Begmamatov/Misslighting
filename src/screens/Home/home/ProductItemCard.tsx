import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {
  BasketIcon,
  HeartIconActive,
  HeartIconNotActive,
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
import {selectUser} from '@store/slices/userSlice';

export type ProductItemCardProps = {
  name?: string;
  photo?: string;
  showNewProduct?: boolean;
  showDiscount?: boolean;
  showDiscountAdd?: boolean;
  price: number;
  price_usd?: number;
  id: number;
  discount: any;
  brand?: string;
  shop?: string;
  category: {
    name?: string;
  };
  isFavorite?: boolean;
  getProducts?: () => void;
};

export default function ProductItemCard(props: ProductItemCardProps) {
  const navigation = useNavigation();
  const cart = useAppSelector(cartSelector);
  let isInCart = !!cart[props.id];
  const dispatch = useDispatch();
  const fav = useAppSelector(favoriteSelector);
  let isFav = !!fav[props.id];
  const discountPrice = (props.price * (100 - props.discount)) / 100;
  const user = useAppSelector(selectUser);

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
        let clear = await requests.products.removeItem({
          product_id: props.id,
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
          product_id: props.id,
        });
        if (!user.token) {
          return Alert.alert(`Oшибка `, 'вы не зарегистрированы', [
            {
              text: 'Ок',
              onPress: () => navigation.navigate(ROUTES.AUTH as never),
            },
          ]);
        }
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
    <TouchableWithoutFeedback
      onPress={() =>
        //@ts-ignore
        navigation.navigate(ROUTES.PRODUCTDETAILS, {props})
      }>
      <View style={styles.cartItem}>
        <Image style={styles.image} source={{uri: assetUrl + props.photo}} />
        {props.discount ? (
          <View style={styles.sileBox}>
            <Text style={styles.sileText}> {props.discount} %</Text>
          </View>
        ) : null}

        {props.showNewProduct ? (
          <View style={[styles.sileBox, styles.sileBoxBgColor]}>
            <Text style={[styles.sileText, styles.sileTextFS]}>Новый</Text>
          </View>
        ) : null}
        {props.showDiscountAdd ? (
          <View style={[styles.sileBox, styles.sileBoxBgColor]}>
            <Text style={[styles.sileText, styles.sileTextFS]}>Под заказ</Text>
          </View>
        ) : null}

        <TouchableOpacity onPress={onAddFavorite} style={styles.heartIconBox}>
          {isFav ? <HeartIconActive /> : <HeartIconNotActive />}
        </TouchableOpacity>

        <View style={styles.cartItemInfo}>
          <Text style={styles.typeText}>{props?.category?.name || ''}</Text>
          <View
            style={{
              flexDirection: 'column',
              height: 95,
              justifyContent: 'space-between',
              paddingBottom: 20,
            }}>
            <Text style={styles.nameText}>
              {props?.name.length > 10
                ? props?.name.slice(0, 10) + '...'
                : props?.name}
            </Text>
            <View>
              {props?.discount > 0 ? (
                <Text style={styles.discountPrice}>
                  {props?.price}
                  UZS
                </Text>
              ) : null}
              <Text style={styles.priceText}>
                {discountPrice}
                UZS
              </Text>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal: 10}}>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: isInCart ? '#84A9C0' : '#FFFFFF'},
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
    borderRadius: 15,
    shadowColor: '#d0d0d0',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
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
    height: 115,
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
  discountPrice: {
    fontSize: 15,
    fontWeight: '400',
    color: COLORS.black,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    opacity: 0.5,
  },
});
