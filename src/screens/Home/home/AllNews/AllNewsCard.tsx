import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import requests, {assetUrl} from '@api/requests';
import {COLORS} from '@constants/colors';
import {HeartIconActive, HeartIconNotActive} from '@icons/icons';
import {useAppSelector} from '@store/hooks';
import {toggleLoading} from '@store/slices/appSettings';
import {favoriteSelector, loadFavorite} from '@store/slices/favoriteSlice';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '@constants/routes';
type Props = {
  buttonTitle?: string;
  item?: any;
};

export default function AllNewsCart({item, buttonTitle}: Props) {
  const dispatch = useDispatch();
  const fav = useAppSelector(favoriteSelector);
  let isFav = !!fav[item?.id];
  const navagation = useNavigation();
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
          <Text style={styles.typeText}>
            {' '}
            {item.name.length > 45
              ? item?.name.slice(0, 45) + '...'
              : item?.name}{' '}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navagation.navigate(
              ROUTES.NEWDETAILS as never,
              {id: item.id} as never,
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
    width: Dimensions.get('screen').width / 2 - 20,
    height: 330,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 20,
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
  },
  image: {
    width: Dimensions.get('screen').width / 2 - 20,
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
