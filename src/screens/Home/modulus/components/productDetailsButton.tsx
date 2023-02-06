import {GestureResponderEvent, StyleSheet, Text, View} from 'react-native';
import React from 'react';
type Props = {
  title: string;
  ButtonStyle?: {
    backgroundColor?: string;
    marginBotton?: number;
    marginTop?: number | string;
    width?: number | string;
    paddingHorizontal?: number | string;
  };
  TextStyle?: {
    color?: string;
    fontSize?: number;
  };
};

const ProductDetailsButton = (props: Props) => {
  return (
    <View
      style={{
        width: props.ButtonStyle?.width,
        backgroundColor: props.ButtonStyle?.backgroundColor,
        height: 31,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingHorizontal: props.ButtonStyle?.paddingHorizontal,
      }}>
      <Text
        style={{
          color: props.TextStyle?.color,
          fontWeight: '600',
          fontSize: props.TextStyle?.fontSize,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default ProductDetailsButton;

const styles = StyleSheet.create({});
