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

const product = [1, 2, 3, 4, 5, 6, 7, 8];

const AllProducts = () => {
  const route: any = useRoute();
  console.log('=================Routes===================');
  console.log(route);
  console.log('=================Routes===================');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{marginBottom: 10}}>
          <GoBackHeader />
          <AllProductTitle title={route.params.title} />
          <SortAndFilter />
        </View>
        <ScrollView
          style={{flex: 1, paddingHorizontal: 15}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.render_container}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={product}
              renderItem={() => (
                <AllProductItemCard
                  imgRequire={route.params.imgRequire}
                  showDiscount={route.params.showNewProduct}
                  showNewProduct={route.params.showDiscount}
                  showDiscountAdd={route.params.showDiscountAdd}
                />
              )}
              numColumns={2}
              contentContainerStyle={{
                alignItems: 'center',
              }}
            />
          </View>
        </ScrollView>
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
});
