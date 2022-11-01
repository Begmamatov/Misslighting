import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

type AllTitleType = {
  title?: string;
};

export default function AllProductTitle(props: AllTitleType) {
  return (
    <View style={styles.title_container}>
      {props ? (
        <Text style={styles.title}>{props.title}</Text>
      ) : (
        <Text style={styles.title}>Популярные товары</Text>
      )}
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
