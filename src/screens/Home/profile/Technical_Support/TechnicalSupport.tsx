import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import GoBackHeader from '../../../../components/uikit/Header/GoBackHeader';
import AllProductTitle from '../../../../components/uikit/AllProductTitle';
import {COLORS} from '../../../../constants/colors';
import DefaultButton from '../../../../components/uikit/DefaultButton';
import {
  FaceBookIconProduct,
  NewTopArrowIcon2,
  TelegramIcon,
  TelegramIconProduct,
  WhatsapIconProduct,
} from '../../../../assets/icons/icons';

const TechnicalSupport = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <GoBackHeader />
      <AllProductTitle title="Поддержка" color={true} />
      <ScrollView style={styles.container}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            lineHeight: 40,
            color: '#757575',
            marginTop: 18,
            marginBottom: 10,
          }}>
          Тема
        </Text>
        <View style={styles.box1}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 15,
              lineHeight: 20,
              color: COLORS.defaultBlack,
            }}>
            Другое
          </Text>
          <NewTopArrowIcon2 />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            lineHeight: 40,
            color: '#757575',
            marginTop: 10,
            marginBottom: 10,
          }}>
          Сообщение
        </Text>
        <TextInput style={styles.input} />
        <View style={{paddingHorizontal: 23}}>
          <DefaultButton
            title="Отправить"
            ButtonStyle={{
              backgroundColor: '#84A9C0',
              marginTop: 44,
              marginBotton: 44,
            }}
            TextStyle={{color: COLORS.white, fontSize: 17}}
          />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '700',
            lineHeight: 40,
            textAlign: 'center',
            color: COLORS.defaultBlack,
          }}>
          Вы также можете написать нам:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 22,
            marginBottom: 130,
          }}>
          <TelegramIconProduct />
          <FaceBookIconProduct />
          <WhatsapIconProduct />
        </View>
      </ScrollView>
    </View>
  );
};

export default TechnicalSupport;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  box1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 23,
    paddingVertical: 23,
    backgroundColor: '#FAFAFA',
    borderRadius: 45,
  },
  input: {
    backgroundColor: '#FAFAFA',
    minHeight: 140,
    borderRadius: 20,
  },
});
