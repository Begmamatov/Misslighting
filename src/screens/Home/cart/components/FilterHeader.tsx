import {COLORS} from '@constants/colors';
import {CancelIcon} from '@icons/icons';
import {STRINGS} from '@locales/strings';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const FilterHeader = () => {
  let navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CancelIcon
          fill={COLORS.red}
          hitSlop={{left: 20, right: 20, top: 20, bottom: 20}}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTxt}>{STRINGS.ru.filtres}</Text>
      </View>
      <Text style={styles.blueTxt}>{STRINGS.ru.clear}</Text>
    </View>
  );
};

export default FilterHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  headerTxt: {
    fontSize: 20,
    marginHorizontal: 15,
    color: COLORS.defaultBlack,
  },

  blueTxt: {
    fontSize: 14,
    color: COLORS.red,
    alignSelf: 'center',
  },
});
