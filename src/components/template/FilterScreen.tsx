import requests from '@api/requests';
import {NewTopArrowIcon2} from '@icons/icons';
import Slider from '@react-native-community/slider';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {COLORS} from '../../constants/colors';
import AllProductTitle from '../uikit/AllProductTitle';
import DefaultButton from '../uikit/DefaultButton';
import FilterModal from '../uikit/Filter/FilterModal';
import DefaultInput from '@components/uikit/TextInput';
import {TextInput} from 'react-native-paper';
import FilterSwitch from './FilterSwitch';
type PropsSort = {
  setModalVisible?: any;
  filter?: any;
  setNewValyu?: any;
  category_id?: number;
};

const FilterScren = (props: PropsSort) => {
  const [catalogType, setCatalogType] = useState<any>([]);
  const getFilterId = async () => {
    try {
      let res = await requests.filter.catalogFilter(props.filter);
      setCatalogType(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFilterId();
  }, []);
  const [filter, setFilter] = useState<any>();
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(priceMin);

  const handleFilter = (id?: any, value?: any, type?: any) => {
    setFilter(({prevState}: any) => {
      return {
        ...prevState,
        [`filter[${id}]`]: id,
      };
    });
  };

  const OnChangeHandlerMine = (e: any) => {
    let newFilter = {
      ...filter,
      price_min: e,
    };
    setPriceMin(e);
    setFilter(newFilter);
  };
  const OnChangeHandlerMax = (e: any) => {
    let newFilter = {
      ...filter,
      price_max: e,
    };
    setPriceMax(e);
    setFilter(newFilter);
  };

  let categoryId = props.category_id;
  const subMendHandler = async () => {
    try {
      let res = await requests.filter.productFilter(
        filter,
        priceMin,
        priceMax,
        categoryId,
      );
      props.setNewValyu(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const submetAndClosed = async () => {
    await subMendHandler();
    props.setModalVisible((a: any) => {
      return !a;
    });
  };
  let btnDisebled = true;

  if (priceMin && priceMax) {
    btnDisebled = false;
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <AllProductTitle title={'Фильтры'} />
      <View style={styles.container}>
        <DefaultInput
          backgroundColor="#f5f5f5"
          label="От"
          onChangeText={OnChangeHandlerMine}
          typeOf="number-pad"
        />
        <DefaultInput
          backgroundColor="#f5f5f5"
          label="До"
          onChangeText={OnChangeHandlerMax}
          typeOf="number-pad"
        />
        <FlatList
          data={catalogType}
          renderItem={({item}) => (
            <FilterSwitch
              input={item}
              handleFilter={handleFilter}
              priceMin={priceMin}
              priceMax={priceMax}
            />
          )}
          style={{marginBottom: 30}}
        />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '100%'}}>
            <DefaultButton
              title="Фильтр"
              ButtonStyle={{backgroundColor: '#ff9500'}}
              TextStyle={{color: '#ffffff'}}
              onPress={submetAndClosed}
              disabled={btnDisebled}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FilterScren;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 15,
  },
  input_box: {},
  input: {
    width: '100%',
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 45,
    paddingHorizontal: 24,
    fontSize: 16,
    marginBottom: 15,
  },
});
