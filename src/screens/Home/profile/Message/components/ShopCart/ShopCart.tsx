import requests, {assetUrl} from '@api/requests';
import {COLORS} from '@constants/colors';
import {ROUTES} from '@constants/routes';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const ShopCart = ({item}: any) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate(ROUTES.CHAT as never, {id: item.id} as never)
      }>
      <View style={styles.messageCard}>
        <View style={styles.image_cart}>
          <Image
            style={styles.tinyLogo}
            source={{uri: assetUrl + item.photo}}
          />
        </View>
        <View style={styles.decoration}>
          <Text style={styles.messageDate}>{item.name}</Text>
          <Text style={styles.messageTitle}>{item.last_message}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ShopCart;

const styles = StyleSheet.create({
  messageCard: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: COLORS.white,
    elevation: 5,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    marginVertical: 10,

    flexDirection: 'row',
  },
  messageDate: {
    fontSize: 19,
    color: '#000000',
    fontWeight: '600',
  },
  messageTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 15,
    marginBottom: 10,
    color: '#000000',
  },
  image_cart: {
    width: 80,
    height: 80,
  },
  decoration: {
    marginLeft: 10,
  },
  tinyLogo: {
    width: '100%',
    height: '100%',
  },
});
