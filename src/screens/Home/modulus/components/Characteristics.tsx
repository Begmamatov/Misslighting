import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

type typeProps = {
  productProperties: any;
};
const Characteristics = (props: typeProps) => {
  return (
    <View style={styles.noActive}>
      <FlatList
        data={props.productProperties}
        renderItem={({item}) => {
          return (
            <View style={styles.box}>
              <Text style={styles.box_title}>{item.key_name}</Text>
              <Text style={styles.box_value}>{item.value_name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Characteristics;

const styles = StyleSheet.create({
  container: {},
  active: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  noActive: {
    marginTop: 15,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 11,
  },
  box_title: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 20,
    color: '#C8C8C8',
  },
  box_value: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 20,
    color: '#000000',
  },
});
