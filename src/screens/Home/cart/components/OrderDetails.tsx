import React from 'react';
import {Image, StyleSheet, TextInput, View, Text} from 'react-native';

//@ts-ignore
import MirImg from '../../../../assets/images/mir.png';
//@ts-ignore
import VisaImg from '../../../../assets/images/visa.png';
//@ts-ignore
import MastercardImg from '../../../../assets/images/mastercard.png';

import {STRINGS} from '@locales/strings';
import {COLORS} from '@constants/colors';

const OrderDetails = ({total}: {total: {total: number; count: number}}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>{STRINGS.ru.orderDetails}</Text>
      <View style={styles.box}>
        <View style={styles.row}>
          <Text>
            {STRINGS.ru.items} ({total?.count}){' '}
          </Text>
          <Text style={styles.price}>{total.total} сум</Text>
        </View>
        <View style={styles.row}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>{STRINGS.ru.Delivery}</Text>
          </View>
          <Text>-50 сум</Text>
        </View>
        <View style={styles.rowFooter}>
          <Text style={styles.footerTxt}>{STRINGS.ru.totalPrice}</Text>
          <Text style={styles.total}> {total?.total} сум </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 15,
  },

  headerTxt: {
    fontSize: 19,
    // fontFamily: 'Montserrat',
    color: COLORS.defaultBlack,
  },

  box: {
    padding: 10,
    elevation: 5,
    backgroundColor: COLORS.white,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: 8,
    marginVertical: 10,
  },

  row: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
  },

  price: {
    fontSize: 14,
    color: COLORS.defaultBlack,
    fontWeight: '700',
  },

  image: {
    width: 30,
    height: 10,
    marginLeft: 5,
    marginTop: 2,
  },

  footerTxt: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
    color: COLORS.defaultBlack,
  },

  rowFooter: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  total: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
    color: COLORS.red,
  },
});
