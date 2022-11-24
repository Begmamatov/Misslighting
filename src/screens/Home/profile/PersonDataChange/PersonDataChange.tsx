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

const PersonalDataChange = () => {
  const navigation = useNavigation();

  return (
    <View style={{marginBottom: 50}}>
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
            placeholder=""
            label="Наименование учреждения"
            backgroundColor={COLORS.noActiveButtonBgColor2}
            marginBottom={0}
          />
          <DefaultInput
            placeholder=""
            label="ИНН"
            backgroundColor={COLORS.noActiveButtonBgColor2}
            marginBottom={0}
          />
          <DefaultInput
            placeholder=""
            label="Свидетельство гос.регистрации"
            backgroundColor={COLORS.noActiveButtonBgColor2}
            marginBottom={0}
          />
          <DefaultInput
            placeholder=""
            label="Свидетельство НДС"
            backgroundColor={COLORS.noActiveButtonBgColor2}
            marginBottom={0}
          />
          <DefaultInput
            placeholder=""
            label="Реквизиты"
            backgroundColor={COLORS.noActiveButtonBgColor2}
            marginBottom={0}
          />
          <DefaultInput
            placeholder=""
            label="Имя"
            backgroundColor={COLORS.noActiveButtonBgColor2}
            marginBottom={0}
          />
          <DefaultInput
            placeholder=""
            label="Фамилия"
            backgroundColor={COLORS.noActiveButtonBgColor2}
            marginBottom={0}
          />
          <DefaultInput
            placeholder=""
            label="Отчество"
            backgroundColor={COLORS.noActiveButtonBgColor2}
            marginBottom={0}
          />
          <DefaultInput
            placeholder=""
            label="Телефон"
            backgroundColor={COLORS.noActiveButtonBgColor2}
            marginBottom={0}
          />
          <DefaultInput
            placeholder=""
            label="Дата рождения"
            backgroundColor={COLORS.noActiveButtonBgColor2}
            marginBottom={0}
          />
          <View>
            <DefaultButton
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

export default PersonalDataChange;

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
