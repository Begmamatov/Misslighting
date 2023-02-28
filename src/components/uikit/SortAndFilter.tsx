import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BottomArrow, FilterIcon} from '../../assets/icons/icons';
import {COLORS} from '../../constants/colors';

type PropsSnadAndFilter = {
  item?: string;
  setModalVisible?: any;
  setModalFilter?: any;
  setModalSort?: any;
  title?: any;
  isFilter?: boolean;
};

export default function SortAndFilter(props: PropsSnadAndFilter) {
  const sortHandler = () => {
    props.setModalVisible(true);
    props.setModalFilter('Сортировать');
  };
  const FilterHandler = () => {
    props.setModalVisible(true);
    props.setModalFilter('Фильтры');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.populer} onPress={sortHandler}>
        <Text style={styles.title}>
          {props.setModalSort ? props.setModalSort : 'Популярные'}
        </Text>
        <BottomArrow fill={COLORS.textColorBlue} />
      </TouchableOpacity>
      {props.isFilter ? (
        <TouchableOpacity style={styles.filter} onPress={FilterHandler}>
          <Text style={styles.title}>Фильтры</Text>
          <FilterIcon fill={COLORS.textColorBlue} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 17,
    width: '100%',
    paddingHorizontal: 15,
  },
  populer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    color: COLORS.textColorBlue,
    marginRight: 5,
  },
});
