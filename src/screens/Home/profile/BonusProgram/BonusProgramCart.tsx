import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '@constants/colors';

const BonusProgramCart = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 14,
          lineHeight: 20,
          fontWeight: '400',
          color: '#C8C8C8',
        }}>
        Сегодня
      </Text>
      <View style={styles.box}>
        <View style={styles.cart}>
          <Text
            style={{
              lineHeight: 40,
              fontSize: 17,
              fontWeight: '700',
              color: COLORS.defaultBlack,
            }}>
            Начисление бонусов
          </Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            lineHeight: 20,
            color: '#35A42B',
          }}>
          +3
        </Text>
      </View>
    </View>
  );
};

export default BonusProgramCart;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
    marginTop: 15,
  },
  box: {
    borderRadius: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowOffset: {width: -1, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    width: '100%',
    marginTop: 12,
    paddingVertical: 18,
    paddingHorizontal: 18,
    elevation: 5,
  },
  cart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
