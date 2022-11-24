import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/colors';

type Props = {
  title: string;
  onPress?: () => void;
  showButton?: boolean;
  products?: any;
};

export default function ProductsTitle(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      {props.showButton && (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
          <Text style={styles.textLink}>Все</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

ProductsTitle.defaultProps = {
  showButton: true,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.TextActiveColor,
  },
  button: {
    width: 91,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.tabBgColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.textColorBlue,
  },
  textLink: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.textColorBlue,
  },
});
