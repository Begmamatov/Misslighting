import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
type itemProps = {
  title?: string;
  value?: any;
};
const itemView = (props: itemProps) => {
  return (
    <View
      style={{
        width: '100%',
        marginVertical: 11,
        paddingHorizontal: 15,
        position: 'relative',
        flexDirection: 'row',
        flexWrap: 'nowrap',
      }}>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '400',
            lineHeight: 20,
            color: '#C8C8C8',
            marginRight: 5,
          }}>
          {props.title}
        </Text>
        <Text style={{fontSize: 15, color: '#3F3535'}}>{props.value}</Text>
      </View>
    </View>
  );
};

export default itemView;

const styles = StyleSheet.create({});
