import {COLORS} from '@constants/colors';
import {STRINGS} from '@locales/strings';
import React from 'react';
import {Platform, StyleSheet, TextInput, View, Text} from 'react-native';

const PriceChoosing = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{STRINGS.ru.price}</Text>
      <View style={styles.row}>
        <View style={styles.inputBox}>
          <Text>{STRINGS.ru.from}</Text>
          <TextInput
            style={styles.input}
            keyboardType={'numeric'}
            placeholder="256"
            placeholderTextColor={COLORS.defaultBlack}
          />
          <Text>сум</Text>
        </View>
        <View style={styles.inputBox}>
          <Text>{STRINGS.ru.till}</Text>
          <TextInput
            style={styles.input}
            placeholder="3499"
            keyboardType={'numeric'}
            placeholderTextColor={COLORS.defaultBlack}
          />
          <Text>сум</Text>
        </View>
      </View>
    </View>
  );
};

export default PriceChoosing;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
  },

  row: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  text: {
    color: COLORS.defaultBlack,
    fontSize: 17,
  },

  inputBox: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.whiteGray,
    paddingHorizontal: 15,
    backgroundColor: COLORS.lightGray,
  },

  input: {
    width: '35%',
    paddingVertical: Platform.OS === 'android' ? 0 : 10,
  },
});
