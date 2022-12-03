import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductCart from '../ProductCart';
import {OrderItemResponse} from '@api/types';
import requests from '@api/requests';
import {COLORS} from '@constants/colors';

const ActiveList = () => {
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
        renderItem={props => <ProductCart item={props} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ActiveList;
