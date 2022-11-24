import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants/colors';
import {
  PlusCounterIcon,
  CrashIcon,
  MinusIcon,
} from '../../../assets/icons/icons';

export default function CartListItem() {
  return (
    <View style={styles.cartItem}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/img1.png')}
      />
      <View style={styles.info}>
        <Text style={styles.nameText}>KR77</Text>
        <Text style={styles.priceTextSile}>1.200.000 UZS</Text>
        <Text style={styles.priceText}>700.000 UZS</Text>
        <View style={styles.counter}>
          <TouchableOpacity style={styles.minus}>
            <View style={styles.minus}>
              <MinusIcon fill={COLORS.white} />
            </View>
          </TouchableOpacity>
          <View style={styles.topBottom}>
            <Text>2 шт</Text>
          </View>
          <TouchableOpacity style={styles.plus}>
            <View style={styles.plus}>
              <PlusCounterIcon fill={COLORS.white} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}>
          <CrashIcon fill={COLORS.textColorBlue} />
        </TouchableOpacity>
      </View>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    width: '100%',
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 15,
    marginRight: 20,
  },
  info: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: 5,
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
    marginBottom: 5,
  },
  counter: {
    // alignItems: "center",
    flexDirection: 'row',
    width: 150,
  },

  iconBox: {
    paddingVertical: 5,
    justifyContent: 'space-between',
  },

  item: {
    color: COLORS.white,
  },

  minus: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: COLORS.textColorBlue,
  },

  plus: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: COLORS.textColorBlue,
  },
  topBottom: {
    // height: "100%",
    width: 50,
    borderColor: COLORS.bgColor2,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  line: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: COLORS.textColorBlue,
    borderRadius: 3,
    top: 10,
    right: 10,
  },
});
