import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import GoBackHeader from '../../../../components/uikit/Header/GoBackHeader';
import NotificationCart from './NotificationCart';
import { COLORS } from '../../../../constants/colors';
import AllProductTitle from '../../../../components/uikit/AllProductTitle';
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Notification = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <GoBackHeader />

      <AllProductTitle title=" Уведомления" color={true} />
      <FlatList
        data={data}
        renderItem={({ }) => <NotificationCart />}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 50 }}
      />
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({});
