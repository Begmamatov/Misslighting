import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
type typeProps = {
  description?: string;
};
const Description = (props: typeProps) => {
  return (
    <View>
      <Text>{props.description}</Text>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({});
