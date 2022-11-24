import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import GoBackHeader from '../../../../components/uikit/Header/GoBackHeader';

const Message = () => {
  return (
    <View>
      <GoBackHeader />
      <View style={styles.header}>
        <Text style={styles.HeaderText}>Сообщения</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.messageCard}>
          <Text style={styles.messageDate}>10.14.2022</Text>
          <Text style={styles.messageTitle}>
            Добрый день. Ваш заказ обработан...
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Message;

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
  messageCard: {
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#fff',
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
  },
});
