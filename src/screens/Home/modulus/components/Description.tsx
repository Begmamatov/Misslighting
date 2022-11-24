import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Description = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
      }}>
      <Text>Описание</Text>
      <Text>X</Text>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({});
