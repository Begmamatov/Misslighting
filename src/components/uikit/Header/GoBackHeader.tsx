import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../../constants/colors';
import { LeftArrow } from '../../../assets/icons/icons';

type Props = {
  title?: string;
  onPress?: () => void;
};

export default function GoBackHeader(props: Props) {
  const navigation = useNavigation<any>();
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        paddingHorizontal: 15,
        paddingVertical: 10
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        hitSlop={{ bottom: 20, top: 20, left: 20, right: 20 }}
        style={styles.row}>
        <LeftArrow />
        {props.title && <Text>{props.title}</Text>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginLeft: 10,
    fontSize: 20,
    // color: COLORS.defaultBlack,
    // fontFamily: 'Montserrat',
    fontWeight: '600',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#71717184',
  },
});
