import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductCart from '../ProductCart';
import {OrderItemResponse} from '@api/types';
import requests from '@api/requests';

const StoryList = () => {
  const [orders, setOrders] = useState<OrderItemResponse[]>([]);

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
    <View>
      <FlatList
        data={orders}
        renderItem={props => <ProductCart {...props} />}
      />
    </View>
  );
};

export default StoryList;

const styles = StyleSheet.create({});
