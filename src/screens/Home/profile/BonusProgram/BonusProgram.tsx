import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GoBackHeader from '../../../../components/uikit/Header/GoBackHeader';
import AllProductTitle from '../../../../components/uikit/AllProductTitle';
import {COLORS} from '../../../../constants/colors';
import {
  NewDiscountIcon,
  NewDiscountWhiteIcon,
} from '../../../../assets/icons/icons';
import BonusProgramCart from './BonusProgramCart';

const data = [1, 2, 3];

const BonusProgram = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <GoBackHeader />
      <AllProductTitle title="Бонусная программа" color={true} />
      <View style={styles.container}>
        <View style={styles.box}>
          <NewDiscountWhiteIcon />
          <Text
            style={{
              fontWeight: '700',
              fontSize: 16,
              lineHeight: 40,
              color: '#FFFFFF',
              marginLeft: 24,
            }}>
            Бонусов на счету: 47
          </Text>
        </View>
        <FlatList data={data} renderItem={() => <BonusProgramCart />} />
      </View>
    </View>
  );
};

export default BonusProgram;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 31,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#84A9C0',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
  },
});
