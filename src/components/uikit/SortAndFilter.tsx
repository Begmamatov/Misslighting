import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {BottomArrow, FilterIcon} from '../../assets/icons/icons';
import {COLORS} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../constants/routes';

type PropsSnadAndFilter = {
  item?: string;
};
export default function SortAndFilter(props: PropsSnadAndFilter) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.populer}
        onPress={() => {
          navigation.navigate(ROUTES.SORTVIEW as never, props as never);
        }}>
        <Text style={styles.title}>Популярные</Text>
        <BottomArrow fill={COLORS.textColorBlue} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.filter}
        onPress={() => {
          navigation.navigate(ROUTES.FILTERVIEW as never);
        }}>
        <Text style={styles.title}>Фильтры</Text>
        <FilterIcon fill={COLORS.textColorBlue} />
      </TouchableOpacity>
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
