import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GoBackHeader from '../../../components/uikit/Header/GoBackHeader';
import AllProductTitle from '../../../components/uikit/AllProductTitle';
import {useRoute} from '@react-navigation/native';
import {COLORS} from '../../../constants/colors';
import CatalogListItem from './CatalogListItem';
const CatalogArray = [
  {
    id: 1,
    title: 'Осветительные Приборы',
    image: require('../../../assets/images/img1.png'),
  },
  {
    id: 2,
    title: 'Декор и Картины',
    image: require('../../../assets/images/img2.png'),
  },
  {
    id: 3,
    title: 'Кафельная Плитка',
    image: require('../../../assets/images/img3.png'),
  },
  {
    id: 4,
    title: 'Мебель',
    image: require('../../../assets/images/img4.png'),
  },
  {
    id: 5,
    title: 'Сантехника',
    image: require('../../../assets/images/img5.png'),
  },
  {
    id: 6,
    title: 'Ковры',
    image: require('../../../assets/images/img6.png'),
  },
  {
    id: 7,
    title: 'Посуда',
    image: require('../../../assets/images/img7.png'),
  },
  {
    id: 8,
    title: 'Шторы',
    image: require('../../../assets/images/img8.png'),
  },
  {
    id: 9,
    title: 'Обои',
    image: require('../../../assets/images/img9.png'),
  },
  {
    id: 10,
    title: 'Обои',
    image: require('../../../assets/images/img10.png'),
  },
  {
    id: 11,
    title: 'Видеонаблюдение и Умный Дом',
    image: require('../../../assets/images/img11.png'),
  },
  {
    id: 12,
    title: 'Бытовая Техника',
    image: require('../../../assets/images/img12.png'),
  },
];
const Subcategory = () => {
  const route: any = useRoute();
  return (
    <View style={styles.container}>
      <GoBackHeader />
      <AllProductTitle title={route.params.title} />
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <FlatList
          data={CatalogArray}
          renderItem={({item}) => (
            <CatalogListItem title={item.title} image={item.image} />
          )}
          keyExtractor={(item: any) => item.id}
          numColumns={3}
          columnWrapperStyle={styles.columnWrapperStyle}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

export default Subcategory;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    flex: 1,
  },
  scroll: {
    marginTop: 30,
    flex: 1,
    backgroundColor: COLORS.tabBgColor,
    paddingHorizontal: 15,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});
