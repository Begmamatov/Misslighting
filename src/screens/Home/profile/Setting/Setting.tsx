import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import GoBackHeader from '@components/uikit/Header/GoBackHeader';
import FlagButton from '@components/uikit/FlagButton';

const Setting = () => {
  return (
    <View style={{height: '95%'}}>
      <GoBackHeader />
      <View style={styles.header}>
        <Text style={styles.HeaderText}>Настройки</Text>
      </View>
      <View style={styles.switchContainer}>
        <View style={styles.switchContext}>
          <Text style={styles.switchText}>Получать Push-уведомления</Text>
          <Switch />
        </View>
        <View style={styles.switchContext}>
          <Text style={styles.switchText}>Получать SMS-уведомления</Text>
          <Switch />
        </View>
      </View>
      <TouchableOpacity style={styles.saveBtn}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>
          Сохранить
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  HeaderText: {
    fontSize: 25,
    fontWeight: '600',
    zIndex: 100,
  },
  saveBtn: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#84A9C0',
    marginHorizontal: 48,
    borderRadius: 45,
    paddingHorizontal: 95,
    paddingVertical: 15,
    display: 'flex',
    alignItems: 'center',
  },
  switchContainer: {},
  switchContext: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  switchText: {
    color: '#C8C8C8',
  },
});
