import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import AllProductItemCard from './AllProductItemCard';
import GoBackHeader from '../../../../components/uikit/Header/GoBackHeader';
import AllProductTitle from '../../../../components/uikit/AllProductTitle';
import SortAndFilter from '../../../../components/uikit/SortAndFilter';
import {COLORS} from '../../../../constants/colors';
import {useRoute} from '@react-navigation/native';
import requests from '@api/requests';

const AllProducts = () => {
  const route: any = useRoute();
  const [valueActiveHandler, setValueActiveHandler] = useState('');
  const [newTovarvalue, setNewTovarvalue] = useState<any>();
  const [popularTovarvalue, setPopularTovarvalue] = useState<any>();
  const populyarneTovar = async () => {
    try {
      let res = await requests.sort.getPopular();
      setPopularTovarvalue(res.data.data);
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  };
  const newTovarHandler = async () => {
    try {
      let res = await requests.sort.getNewAdded();
      setNewTovarvalue(res.data.data);
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  };
  useEffect(() => {
    populyarneTovar();
    newTovarHandler();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{marginBottom: 10}}>
          <GoBackHeader />
          <AllProductTitle title={route.params.props.title} />
          <SortAndFilter />
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={route.params.products}
          renderItem={({item}) => (
            <AllProductItemCard
              imgRequire={route.params.props.imgRequire}
              showDiscount={route.params.props.showDiscount}
              showNewProduct={route.params.props.showNewProduct}
              showDiscountAdd={route.params.props.showDiscountAdd}
              {...item}
            />
          )}
          numColumns={2}
          style={styles.container2}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default AllProducts;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: '100%',
    height: '100%',
  },
  render_container: {
    position: 'relative',
    width: '100%',
    marginTop: 29,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  container2: {marginBottom: 15},
  contentContainerStyle: {paddingHorizontal: 10},
});
