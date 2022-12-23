import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import GoBackHeader from '../../../../components/uikit/Header/GoBackHeader';
import NotificationCart from './NotificationCart';
import {COLORS} from '../../../../constants/colors';
import AllProductTitle from '../../../../components/uikit/AllProductTitle';
import {useNavigation, useRoute} from '@react-navigation/native';
import requests from '@api/requests';
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Notification = () => {
  const {params} = useRoute();
  const [state, setState] = useState();
  const notificationHandler = async () => {
    try {
      let res = await requests.profile.notificationAll();
      setState(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    notificationHandler;
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <GoBackHeader />

      <AllProductTitle title="Уведомления" color={true} />
      <FlatList
        data={state}
        renderItem={({item}) => <NotificationCart />}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{paddingBottom: 50}}
      />
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({});
