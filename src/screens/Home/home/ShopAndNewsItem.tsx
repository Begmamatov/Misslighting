import requests, {assetUrl} from '@api/requests';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '@store/hooks';
import {toggleLoading} from '@store/slices/appSettings';
import {favoriteSelector, loadFavorite} from '@store/slices/favoriteSlice';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {HeartIconActive, HeartIconNotActive} from '../../../assets/icons/icons';
import {COLORS} from '../../../constants/colors';
import {ROUTES} from '@constants/routes';
type Props = {
  buttonTitle?: string;
  item?: any;
};

export default function ShopAndNewsItem({item, buttonTitle}: Props) {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const fav = useAppSelector(favoriteSelector);
  let isFav = !!fav[item?.id];

  const onAddFavorite = async () => {
    try {
      dispatch(toggleLoading(true));
      let res = await requests.favorites.addFavorite({
        product_id: item.id,
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
      <Image style={styles.image} source={{uri: assetUrl + item.photo}} />
      <TouchableOpacity onPress={onAddFavorite} style={styles.heartIconBox}>
        {isFav ? <HeartIconActive /> : <HeartIconNotActive />}
      </TouchableOpacity>
      <View style={styles.cartItemInfo}>
        <View style={styles.cartItemInfoBox}>
          <Text style={styles.typeText}> {item.name} </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate(
              //@ts-ignore
              ROUTES.SHOPDETAILS as never,
              {idShop: item.id} as never,
            )
          }>
          <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    width: 192,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 15,
    marginBottom: 20,
    flexDirection: 'column',
    shadowColor: '#d0d0d0',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    paddingBottom: 10,
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
    height: 50,
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
