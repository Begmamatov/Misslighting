import Text from '@components/uikit/Text';
import {COLORS} from '@constants/colors';
import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

export interface DefaultHeaderProps {
  name?: string;
}

const DefaultHeader = ({name}: DefaultHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name ? name : ''}</Text>
    </View>
  );
};

export default DefaultHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    marginBottom: 14,
  },
  text: {
    fontSize: 25,
    color: COLORS.black,
    fontWeight: '700',
  },
});
