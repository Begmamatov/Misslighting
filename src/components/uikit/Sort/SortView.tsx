import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type PropsSort = {
  item?: string;
};
const SortView = (props: PropsSort) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}></View>
    </SafeAreaView>
  );
};

export default SortView;

const styles = StyleSheet.create({
  container: {},
});
