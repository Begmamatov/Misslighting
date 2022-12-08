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
  const {params, name, key}: any = useRoute();
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
  console.log(JSON.stringify(params.props, null, 2));

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{marginBottom: 10}}>
          <GoBackHeader />
          <AllProductTitle title={params.props.title} />
          {params.props.filter ? <SortAndFilter /> : null}
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={params.products}
          renderItem={({item}) => (
            <AllProductItemCard
              imgRequire={params.props.imgRequire}
              showDiscount={params.props.showDiscount}
              showNewProduct={params.props.showNewProduct}
              showDiscountAdd={params.props.showDiscountAdd}
              {...item}
            />
          )}
          numColumns={2}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default AllProducts;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.tabBgColor,
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
  container2: {marginBottom: 0},

  contentContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
