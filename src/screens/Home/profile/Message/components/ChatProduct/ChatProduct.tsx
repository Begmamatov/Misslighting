import requests from '@api/requests';
import AllProductTitle from '@components/uikit/AllProductTitle';
import GoBackHeader from '@components/uikit/Header/GoBackHeader';
import {COLORS} from '@constants/colors';
import {RightArrowIcon, SaveIconMessage} from '@icons/icons';
import {STRINGS} from '@locales/strings';
import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ChatItemMe from '../chat/ChatItemMe';
import ChatCart from './ChatCart';

const ChatProducts = () => {
  const route = useRoute<any>();
  let id = route.params?.id;
  const [sendingMsg, setSendingMsg] = useState('');
  const [messages, setMessages] = useState();

  const file = '';
  const [detailIdValue, setDetailIdValue] = useState<any>([]);

  const getDetailId = async () => {
    try {
      let res = await requests.products.getProductDetailID(id);
      setDetailIdValue(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = async () => {
    try {
      if (!!sendingMsg) {
        let res = await requests.chat.sendShopMessege(sendingMsg, file, id);
        let data = await res.data.data;
        setMessages(data);
        setSendingMsg('');
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetailId();
  }, []);

  return (
    <View style={styles.container}>
      <GoBackHeader />
      <AllProductTitle title="Чат с продавцом" color={true} />

      <FlatList
        style={styles.chat}
        data={messages}
        inverted
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) =>
          item ? <ChatItemMe key={index} item={item} /> : null
        }
      />

      <View style={styles.send_cart}>
        <View style={styles.send_cart_item}>
          <SaveIconMessage fill={'#C8C8C8'} />
          <TextInput
            placeholder={STRINGS.ru.yourMessage}
            style={styles.input}
            placeholderTextColor={'#C8C8C8'}
            onChangeText={text => setSendingMsg(text)}
            value={sendingMsg}
          />
          <TouchableOpacity onPress={sendMessage}>
            <RightArrowIcon style={styles.tgicon} fill={'#C8C8C8'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingBottom: 80,
  },
  data_title: {
    textAlign: 'center',
  },
  chat: {
    marginHorizontal: 15,
    position: 'relative',
  },
  send_cart: {
    position: 'absolute',
    height: 64,
    backgroundColor: COLORS.white,
    width: '100%',
    bottom: 10,
    paddingHorizontal: 20,
  },
  send_cart_item: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    borderColor: COLORS.white,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    paddingHorizontal: 19,
  },

  input: {
    width: '80%',
    marginLeft: 5,
    color: COLORS.defaultBlack,
  },

  tgicon: {
    marginLeft: 10,
    alignSelf: 'center',
  },

  myMsg: {
    color: COLORS.white,
    backgroundColor: COLORS.lighBlue,
    padding: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
  },

  myBox: {
    marginTop: 20,
    alignItems: 'flex-end',
    marginRight: 10,
  },
});
