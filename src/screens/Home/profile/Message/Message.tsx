import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import GoBackHeader from '../../../../components/uikit/Header/GoBackHeader';
import {COLORS} from '@constants/colors';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '@constants/routes';

const Message = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <GoBackHeader />
      <View style={styles.header}>
        <Text style={styles.HeaderText}>Сообщения</Text>
      </View>
      <View
        style={{
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={styles.messageCard}
          onPress={() => navigation.navigate(ROUTES.CHAT as never)}>
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
    marginTop: 10,
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
    shadowOffset: {width: -1, height: 4},
    shadowColor: '#403f3f',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
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
    color: COLORS.defaultBlack,
  },
});
