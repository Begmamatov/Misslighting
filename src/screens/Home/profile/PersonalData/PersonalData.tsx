import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import GoBackHeader from '../../../../components/uikit/Header/GoBackHeader';
import AllProductTitle from '../../../../components/uikit/AllProductTitle';
import DefaultInput from '../../../../components/uikit/TextInput';
import DefaultButton from '../../../../components/uikit/DefaultButton';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../../constants/routes';
import {COLORS} from '../../../../constants/colors';

const PersonalData = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(ROUTES.PersonalDataChange as never);
  };
  return (
    <View style={{marginBottom: 100}}>
      <GoBackHeader />
      <ScrollView>
        <AllProductTitle title="Личные данные" color={true} />
        <View style={style.ProfileInfo}>
          <Image
            style={style.ProfileImage}
            source={require('../../../../assets/images/profile.png')}
          />
          <View style={style.ProfileInfoTextBox}>
            <Text style={style.ProfileInfoText}>Добавить</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 15}}>
          <DefaultInput
            label="Номер телефона"
            backgroundColor={COLORS.noActiveButtonBgColor2}
          />
          <DefaultInput
            label="Имя"
            backgroundColor={COLORS.noActiveButtonBgColor2}
          />
          <DefaultInput
            label="Фамилия"
            backgroundColor={COLORS.noActiveButtonBgColor2}
          />
          <DefaultInput
            label="Отчество"
            backgroundColor={COLORS.noActiveButtonBgColor2}
          />
          <DefaultInput
            label="Дата рождения"
            backgroundColor={COLORS.noActiveButtonBgColor2}
          />
          <DefaultInput
            label="Страна"
            backgroundColor={COLORS.noActiveButtonBgColor2}
          />
          <DefaultInput
            label="Город"
            backgroundColor={COLORS.noActiveButtonBgColor2}
          />
          <Text>Адрес</Text>
          <DefaultInput
            label="Улица"
            backgroundColor={COLORS.noActiveButtonBgColor2}
          />
          <DefaultInput
            label="Дом"
            backgroundColor={COLORS.noActiveButtonBgColor2}
          />
          <View>
            <DefaultButton
              onPress={onPress}
              title="Изменить"
              ButtonStyle={{backgroundColor: '#84A9C0'}}
              TextStyle={{color: '#FFFFFF'}}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PersonalData;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  ProfileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  ProfileImage: {
    width: 86,
    height: 86,
    borderRadius: 100,
    marginRight: 15,
  },
  ProfileInfoTextBox: {
    flex: 1,
    flexDirection: 'column',
  },
  ProfileInfoTextName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  ProfileInfoText: {
    fontSize: 14,
    color: '#C8C8C8',
  },
  settingsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#E1E1E1',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 17,
    elevation: 1,
    marginBottom: 15,
    marginHorizontal: 15,
  },
  settingsButtonIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000',
  },
  logOutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#E1E1E1',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 17,
    elevation: 1,
    marginBottom: 50,
    marginHorizontal: 15,
  },
  logOutButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000',
  },
});
