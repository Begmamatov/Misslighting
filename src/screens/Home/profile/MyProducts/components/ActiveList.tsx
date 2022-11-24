import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProductCart from '../ProductCart';
const data = [1, 2, 3];
const ActiveList = () => {
  return (
    <View>
      <FlatList data={data} renderItem={({}) => <ProductCart />} />
    </View>
  );
};

export default ActiveList;

const styles = StyleSheet.create({});
