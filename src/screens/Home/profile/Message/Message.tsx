import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import GoBackHeader from '../../../../components/uikit/Header/GoBackHeader';
import {COLORS} from '@constants/colors';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '@constants/routes';
import requests from '@api/requests';
import ShopCart from './components/ShopCart/ShopCart';

const Message = () => {
  const [state, setState] = useState<any>([]);
  const shopsAll = async () => {
    try {
      let res = await requests.shops.getShops();
      setState(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [shopProductMessesge, setshopProductMessesge] = useState<any>();
  const getShopDetail = async () => {
    try {
      let res = await requests.chat.shopGetProduct();
      setshopProductMessesge(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    shopsAll();
    getShopDetail();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <GoBackHeader />
      <View style={styles.header}>
        <Text style={styles.HeaderText}>Сообщения</Text>
      </View>
      <View
        style={{
          marginTop: 20,
          flex: 1,
        }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={shopProductMessesge}
          renderItem={({item}) => <ShopCart item={item} />}
          style={styles.container}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  HeaderText: {
    fontSize: 25,
    fontWeight: '600',
    zIndex: 100,
    color: COLORS.black,
  },
  messageCard: {
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    shadowOffset: {width: -1, height: 4},
    shadowColor: '#403f3f',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  messageDate: {
    fontSize: 14,
    color: '#C8C8C8',
  },
  messageTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 15,
    marginBottom: 10,
    color: COLORS.defaultBlack,
  },
  container: {marginBottom: 15, marginTop: 15},
  contentContainerStyle: {paddingHorizontal: 10},
});
