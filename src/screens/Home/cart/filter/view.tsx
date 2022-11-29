import React from 'react';
import {styles} from './style';
import {View} from 'react-native';
import {STRINGS} from '@locales/strings';
import FilterHeader from '../components/FilterHeader';
import PriceChoosing from '../components/PriceChoosing';
import SwitchComponent from '../components/SwitchComponent';
import ChooseBrands from '../components/ChooseBrands';
import DefaultButton from '@components/uikit/DefaultButton';

const FilterView = () => {
  return (
    <View style={styles.container}>
      <FilterHeader />
      <PriceChoosing />
      <SwitchComponent text={STRINGS.ru.price} />
      <SwitchComponent text={STRINGS.ru.getToday} />
      <SwitchComponent text={STRINGS.ru.moreCashback} />
      <ChooseBrands />
      <DefaultButton title="Показать 1 товар" />
    </View>
  );
};

export default FilterView;
