import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import requests from '@api/requests';
import {COLORS} from '@constants/colors';
import ProductCartStore from './ProductCartStore';

const StoryList = () => {
  const [orders, setOrders] = useState<any>();

  const getOrders = async () => {
    try {
      let res = await requests.order.getOrders();
      setOrders(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <FlatList
        data={orders}
        renderItem={props => <ProductCartStore item={props} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default StoryList;

const styles = StyleSheet.create({});
