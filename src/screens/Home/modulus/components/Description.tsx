import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '@constants/colors';
type typeProps = {
  description?: string;
};
const Description = (props: typeProps) => {
  return (
    <View>
      <Text style={{color: COLORS.black}}>{props.description}</Text>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({});
