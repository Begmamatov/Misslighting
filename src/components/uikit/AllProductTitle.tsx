import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function AllProductTitle() {
  return (
    <View style={styles.title_container}>
      <Text style={styles.title}>Популярные товары</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title_container: {
    paddingHorizontal: 15,
  },
  title: {
    color: '#FF9500',
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 40,
  },
});
