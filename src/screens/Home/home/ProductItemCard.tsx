import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {BasketIcon, HeartIconNotActive} from '../../../assets/icons/icons';
import {COLORS} from '../../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../constants/routes';

export type ProductItemCardProps = {
  showNewProduct?: boolean;
  showDiscount?: boolean;
  showDiscountAdd?: boolean;
  imgRequire?: any;
};

export default function ProductItemCard(props: ProductItemCardProps) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        //@ts-ignore
        navigation.navigate(ROUTES.PRODUCTDETAILS, {props})
      }>
      <View style={styles.cartItem}>
        <Image style={styles.image} source={props.imgRequire} />

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
        <View style={styles.heartIconBox}>
          <HeartIconNotActive />
        </View>
        <View style={styles.cartItemInfo}>
          <Text style={styles.typeText}>Люстры</Text>
          <Text style={styles.nameText}>KR77</Text>
          <Text style={styles.priceTextSile}>1.200.000 UZS</Text>
          <Text style={styles.priceText}>700.000 UZS</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>В корзину</Text>
            <BasketIcon fill={COLORS.textColorBlue} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

ProductItemCard.defaultProps = {
  showNewProduct: false,
  showDiscount: false,
  imgRequire: require('../../../assets/images/Item.png'),
};

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
