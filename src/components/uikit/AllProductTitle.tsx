import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type AllTitleType = {
  title?: string;
  color?: boolean;
  marginTop?: number;
  marginBottom?: number;
};

export default function AllProductTitle(props: AllTitleType) {
  return (
    <View style={[styles.title_container, { marginBottom: props.marginBottom, marginTop: props.marginTop }]}>
      {props ? (
        <Text
          style={[styles.title, { color: props.color ? '#3F3535' : '#FF9500' }]}>
          {props.title}
        </Text>
      ) : (
        <Text style={[styles.title]}>Популярные товары</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title_container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 40,
  },
});
