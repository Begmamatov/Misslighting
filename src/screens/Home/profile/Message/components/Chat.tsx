import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import GoBackHeader from '@components/uikit/Header/GoBackHeader';
import AllProductTitle from '@components/uikit/AllProductTitle';
import {COLORS} from '@constants/colors';
import ChatCart from './ChatCart';
import requests from '@api/requests';

const Chat = () => {
  const [messages, setMessages] = useState<any>([]);
  const chantSend = async () => {
    try {
      let res = requests.chat.postSend(messages);
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <GoBackHeader />
      <AllProductTitle title="Чат с продавцом" color={true} />
      <View style={{paddingHorizontal: 15}}>
        <ChatCart />
      </View>
      <Text style={styles.data_title}>Сегодня</Text>
      <ScrollView style={styles.chat}></ScrollView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  data_title: {
    textAlign: 'center',
  },
  chat: {
    borderWidth: 1,
    marginHorizontal: 15,
  },
});
