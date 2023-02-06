import requests from '@api/requests';
import {COLORS} from '@constants/colors';
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import ProductCartActive from './ProductCartActive';

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
        renderItem={props => <ProductCartActive {...props} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{paddingBottom: 50}}
      />
    </View>
  );
};

export default ActiveList;
