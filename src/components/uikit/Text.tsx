import {COLORS} from '@constants/colors';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text as RNText,
  TextBase,
  TextProps,
  TextStyle,
} from 'react-native';

export default function Text({children, style}: TextProps): JSX.Element {
  //@ts-ignore
  switch (style?.fontWeight) {
    case 'bold':
      break;
    case '400':
      break;
    case '700':
      break;
    default:
      break;
  }
  let styl: StyleProp<TextStyle> = StyleSheet.compose(
    {
      color: COLORS.gray,
    },
    style,
  );

  return <RNText style={styl}>{children}</RNText>;
}
