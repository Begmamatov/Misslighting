import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {NewTopArrowIcon} from '../../../../assets/icons/icons';

const data = [
  {
    id: 0,
    title: 'Габариты:',
    value: 'диаметр и высота',
  },
  {
    id: 2,
    title: 'Габариты:',
    value: 'диаметр и высота',
  },
  {
    id: 3,
    title: 'Габариты:',
    value: 'диаметр и высота',
  },
  {
    id: 4,
    title: 'Габариты:',
    value: 'диаметр и высота',
  },
  {
    id: 5,
    title: 'Габариты:',
    value: 'диаметр и высота',
  },
  {
    id: 6,
    title: 'Габариты:',
    value: 'диаметр и высота',
  },
];

const Characteristics = () => {
  return (
    <View style={styles.container}>
      <View style={styles.active}>
        <Text>Характеристики</Text>
        {/* <NewTopArrowIcon /> */}
        <Text>X</Text>
      </View>
      <View style={styles.noActive}>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <View style={styles.box}>
                <Text style={styles.box_title}>{item.title}</Text>
                <Text style={styles.box_value}>{item.value}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Characteristics;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
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
