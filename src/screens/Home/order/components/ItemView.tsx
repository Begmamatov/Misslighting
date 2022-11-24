import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
type itemProps = {
  title?: string;
  value?: string;
};
const itemView = (props: itemProps) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
        marginVertical: 11,
      }}>
      <Text
        style={{
          fontSize: 15,
          fontWeight: '400',
          lineHeight: 20,
          color: '#C8C8C8',
        }}>
        {props.title}
      </Text>
      <Text style={{fontSize: 15, color: '#3F3535', marginLeft: 5}}>
        {props.value}
      </Text>
    </View>
  );
};

export default itemView;

const styles = StyleSheet.create({});
