import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '@constants/colors';

const ChatItemPerson = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.personNime}>You</Text>
      <View style={styles.messege}>
        <Text style={styles.messege_text}>
          Здравствуйте. Подскажите сколько будет длиться акция на эту люстру?
        </Text>
      </View>
      <Text style={styles.date_text}>17:00</Text>
    </View>
  );
};

export default ChatItemPerson;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingRight: 2,
  },
  personNime: {
    color: '#3F3535',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 40,
  },
  messege: {
    paddingVertical: 22,
    paddingRight: 9,
    paddingLeft: 18,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#84A9C0',
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  messege_text: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 18,
  },
  date_text: {
    color: '#C8C8C8',
    fontSize: 13,
    fontWeight: '400',
    marginTop: 10,
  },
});
