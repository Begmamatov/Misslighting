import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

import AllProductItemCard from './AllProductItemCard';
import GoBackHeader from '../../../../components/uikit/Header/GoBackHeader';
import AllProductTitle from '../../../../components/uikit/AllProductTitle';
import SortAndFilter from '../../../../components/uikit/SortAndFilter';
import {COLORS} from '../../../../constants/colors';
import {useRoute} from '@react-navigation/native';

const AllProducts = () => {
  const route: any = useRoute();
  console.log('====================================');
  console.log(JSON.stringify(route, null, 2));
  console.log('====================================');
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
