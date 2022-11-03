import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import GoBackHeader from '@components/uikit/Header/GoBackHeader';

const MyProduct = () => {
  const [state, setState] = useState(false);

  return (
    <View>
      <GoBackHeader />
      <View style={styles.header}>
        <Text style={styles.HeaderText}>Мои заказы</Text>
      </View>
      <View style={styles.switchBtns}>
        <TouchableOpacity
          style={[styles.position, {left: state ? 0 : '50%'}]}
          onPress={() => setState(prev => !prev)}></TouchableOpacity>
        <Text style={[styles.textActive, {color: state ? '#fff' : '#777'}]}>
          Активные
        </Text>
        <Text style={[styles.textNoActive, {color: state ? '#777' : '#fff'}]}>
          История
        </Text>
      </View>
      <View></View>
    </View>
  );
};

export default MyProduct;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  position: {
    position: 'absolute',
    width: 180,
    height: 47,
    backgroundColor: '#84A9C0',
    borderRadius: 45,
    top: 0,
    // left: 0,
    right: 0,
    zIndex: 2,
  },
  HeaderText: {
    fontSize: 25,
    fontWeight: '600',
    zIndex: 100,
  },
  switchBtns: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderRadius: 45,
    marginHorizontal: 20,
    paddingVertical: 15,
    overflow: 'hidden',
  },
  ActiveBtn: {
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 45,
    color: '#fff',
  },
  textNoActive: {
    fontWeight: '600',
    zIndex: 100,
  },
  textNone: {
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 45,
  },
  textActive: {
    fontWeight: '600',
    zIndex: 100,
  },
});
