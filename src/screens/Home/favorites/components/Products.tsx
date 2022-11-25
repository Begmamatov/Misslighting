import requests, {appendUrl} from '@api/requests';
import {ProductItemResponse} from '@api/types';
import DefaultButton from '@components/uikit/DefaultButton';
import Text from '@components/uikit/Text';
import {COLORS} from '@constants/colors';
import {ROUTES} from '@constants/routes';
import {BasketIcon, HeartIconBorder, HeartIconRed} from '@icons/icons';
import {STRINGS} from '@locales/strings';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '@store/hooks';
import {toggleLoading} from '@store/slices/appSettings';
import {cartSelector, loadCart} from '@store/slices/cartSlice';
import {favoriteSelector, loadFavorite} from '@store/slices/favoriteSlice';
import React from 'react';
import {
  Image,
  LayoutAnimation,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';

const Products = ({item}: {item: ProductItemResponse}) => {
  let {photo, name, price, discount, price_usd, id, isFavorite} = item;

  const dispatch = useDispatch();
  const cart = useAppSelector(cartSelector);
  const favorite = useAppSelector(favoriteSelector);
  let isInCart = !!cart[id];
  let isInFavorite = !!favorite[id];

  const navigation: any = useNavigation();

  const onCartPress = async () => {
    try {
      if (isInCart) {
        //TODO remove from cart
        try {
          let res = await requests.products.removeItem({
            product_id: id,
          });
          let cartRes = await requests.products.getCarts();
          dispatch(loadCart(cartRes.data.data));
        } catch (error) {
          console.log(error);
        } finally {
          effect();
        }
      } else {
        let res = await requests.products.addToCart({
          amount: 1,
          product_id: id,
        });
        let cartRes = await requests.products.getCarts();
        dispatch(loadCart(cartRes.data.data));
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
        navigation.navigate(ROUTES.PRODUCTDETAILS, {item, id});
      }}>
      <View style={styles.container}>
        <Image source={{uri: appendUrl(photo)}} style={styles.image} />
        <View style={styles.itemsContainer}>
          <View style={styles.nameContainer}>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 13,
                color: ' #C8C8C8',
              }}>
              Люстры
            </Text>
            <Text style={styles.itemName}>{name ? name : ''}</Text>
            <Text style={styles.oldPrice}>{price_usd} сум</Text>
            <Text style={styles.price}>{price} сум</Text>
          </View>
          <View style={styles.priceContainer}>
            <TouchableOpacity
              onPress={onAddFavorite}
              hitSlop={{bottom: 10, top: 10, right: 10, left: 10}}>
              <Text style={{fontWeight: '700', color: '#000000', fontSize: 16}}>
                X
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <BasketIcon fill={COLORS.textColorBlue} />
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
