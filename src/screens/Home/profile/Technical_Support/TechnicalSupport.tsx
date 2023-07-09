import {
  Alert,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import GoBackHeader from '../../../../components/uikit/Header/GoBackHeader';
import AllProductTitle from '../../../../components/uikit/AllProductTitle';
import {COLORS} from '../../../../constants/colors';
import DefaultButton from '../../../../components/uikit/DefaultButton';
import {
  FaceBookIconProduct,
  NewTopArrowIcon2,
  TelegramIconProduct,
  WhatsapIconProduct,
} from '../../../../assets/icons/icons';
import SelectDropdown from 'react-native-select-dropdown';
import requests from '@api/requests';

const TechnicalSupport = () => {
  const [state, setState] = React.useState({
    theme: '1',
    message: '',
  });

  const onStateChange = (key: string, value: string) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  const MessegeSende = async () => {
    try {
      let res = await requests.chat.postSend(state);
      const data = res.data.data;
      !!data && Alert.alert('', `Спасибо, ваше письмо успешно отправлено`);
      console.log(JSON.stringify(res.data.data, null, 2));
      setState({
        theme: '',
        message: '',
      });
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <GoBackHeader />
      <AllProductTitle title="Поддержка" color={true} />
      <ScrollView style={styles.container}>
        {/* <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: '#757575',
            marginTop: 18,
            marginBottom: 10,
          }}>
          Тема
        </Text>
        <View style={styles.box1}>
          <SelectDropdown
            data={dataTheme}
            onSelect={(selectedItem: any) => {
              onStateChange('theme', selectedItem.id);
            }}
            buttonTextAfterSelection={(selectedItem: any, index: any) => {
              return selectedItem.title;
            }}
            rowTextForSelection={(item: any, index: any) => {
              return item.title;
            }}
            buttonStyle={styles.dropdown2BtnStyle}
            buttonTextStyle={{
              color: '#3F3535',
              fontSize: 16,
              textAlign: 'left',
            }}
            renderDropdownIcon={() => {
              return <NewTopArrowIcon2 />;
            }}
            dropdownIconPosition="right"
            rowTextStyle={{
              color: '#3F3535',
              fontSize: 16,
            }}
            defaultButtonText="Выберите тему"
          />
        </View> */}
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: '#757575',
            marginTop: 20,
            marginBottom: 20,
          }}>
          Сообщение
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Введите сообщение"
          placeholderTextColor="#757575"
          multiline={true}
          numberOfLines={4}
          onChangeText={text => onStateChange('message', text)}
          value={state.message}
        />
        <View style={{paddingHorizontal: 23}}>
          <DefaultButton
            title="Отправить"
            ButtonStyle={{
              backgroundColor: '#84A9C0',
              marginTop: 44,
              marginBotton: 44,
            }}
            TextStyle={{color: COLORS.white, fontSize: 17}}
            onPress={MessegeSende}
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
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://xn--80affa3aj0al.xn--80asehdb/');
            }}>
            <TelegramIconProduct />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.facebook.com/');
            }}>
            <FaceBookIconProduct />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.whatsapp.com/');
            }}>
            <WhatsapIconProduct />
          </TouchableOpacity>
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
    width: '100%',
    height: 50,
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#FAFAFA',
    minHeight: 80,
    borderRadius: 20,
    color: COLORS.defaultBlack,
    padding: 20,
    paddingTop: 15,
    fontSize: 16,
  },
  dropdown2BtnStyle: {
    width: '100%',
    height: 50,
    borderRadius: 45,
    paddingHorizontal: 20,
    backgroundColor: '#FAFAFA',
    marginTop: 15,
    marginBottom: 15,
  },
});
