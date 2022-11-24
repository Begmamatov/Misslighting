import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProductCart from '../ProductCart';
const data = [1, 2];
const StoryList = () => {
  return (
    <View>
      <FlatList data={data} renderItem={({}) => <ProductCart />} />
    </View>
  );
};

export default StoryList;

const styles = StyleSheet.create({});
