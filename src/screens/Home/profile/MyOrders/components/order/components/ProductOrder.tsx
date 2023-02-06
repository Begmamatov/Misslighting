import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type propsType = {
  title?: string;
  productValue?: string;
};

const ProductOrder = (props: propsType) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, fontWeight: '600', color: '#717171'}}>
        {props.title}
      </Text>
      <Text style={{fontSize: 16, fontWeight: '600', color: '#3F3535'}}>
        {props.productValue}
      </Text>
    </View>
  );
};

export default ProductOrder;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginVertical: 5,
  },
});
