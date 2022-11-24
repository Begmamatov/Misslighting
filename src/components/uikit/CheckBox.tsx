import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/colors';

type Props = {
  label?: string;
  viewStyle?: object;
  textStyle?: object;
};

export default function CheckBox(props: Props) {
  return (
    <View style={styles.checkBox} {...props.viewStyle}>
      <View style={styles.checkBoxItem}>
        <View style={styles.checkBoxItemBox}></View>
      </View>
      <Text style={styles.checkBoxText} {...props.textStyle}>
        {props.label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  checkBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  checkBoxItem: {
    width: 22,
    height: 22,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.activeButtonBgColor,
    marginRight: 10,
    padding: 2,
  },
  checkBoxItemBox: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.activeButtonBgColor,
    borderRadius: 5,
  },
  checkBoxText: {
    fontSize: 13,
    color: COLORS.checkboxTextColor,
  },
});
