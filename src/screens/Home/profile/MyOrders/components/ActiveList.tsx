import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductCart from '../ProductCart';
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
  console.log('====================================');
  console.log('Active lest', JSON.stringify(orders, null, 2));
  console.log('====================================');
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <FlatList
        data={orders}
        renderItem={props => <ProductCart item={props} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{paddingBottom: 50}}
      />
    </View>
  );
};

export default ActiveList;
