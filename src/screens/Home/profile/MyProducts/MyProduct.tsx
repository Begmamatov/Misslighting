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
          style={[
            styles.position,
            {left: state ? 0 : '50%'},
          ]}></TouchableOpacity>
        <TouchableOpacity
          style={{zIndex: 100}}
          onPress={() => setState(prev => !prev)}>
          <Text style={[styles.textActive, {color: state ? '#fff' : '#777'}]}>
            Активные
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{zIndex: 100}}
          onPress={() => setState(prev => !prev)}>
          <Text style={[styles.textNoActive, {color: state ? '#777' : '#fff'}]}>
            История
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemProduct}>
        <View style={styles.itemHeader}>
          <View>
            <Text style={styles.itemTextBold}>Заказ 118</Text>
            <Text style={styles.itemText}>10.14.2022</Text>
          </View>
          <View>
            <Text style={styles.itemTextRed}>Ожидает оплату</Text>
          </View>
        </View>
        <View style={styles.itemHeader2}>
          <View>
            <Text style={styles.itemTextBold}>A55 MORENA</Text>
            <Text style={styles.itemText}>Артикул: 34579</Text>
          </View>
          <View>
            <Text>3.600.000 сум</Text>
          </View>
        </View>
        <View style={styles.itemHeader2}>
          <View>
            <Text style={styles.itemTextBold}>A55 MORENA</Text>
            <Text style={styles.itemText}>Артикул: 34579</Text>
          </View>
          <View>
            <Text>3.600.000 сум</Text>
          </View>
        </View>
        <View style={styles.itemFooter}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.itemTextBold}>Итого: </Text>
            <Text>7.200.000 сум</Text>
          </View>
          <TouchableOpacity style={styles.btnMore}>
            <Text style={{color: '#fff', fontWeight: '600'}}>Детали</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  itemProduct: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
  },
  itemHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: 'rgba(113, 113, 113, 0.1)',
  },
  itemHeader2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  itemFooter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: 'rgba(113, 113, 113, 0.1)',
  },
  btnMore: {
    paddingVertical: 10,
    paddingHorizontal: 21,
    backgroundColor: '#84A9C0',
    borderRadius: 45,
  },
  itemTextBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemText: {
    color: '#C8C8C8',
    paddingTop: 5,
  },
  itemTextRed: {
    color: 'red',
    fontSize: 14,
  },
});
