import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import GoBackHeader from '../../../../components/uikit/Header/GoBackHeader';
import AllProductTitle from '../../../../components/uikit/AllProductTitle';
import DefaultInput from '../../../../components/uikit/TextInput';
import DefaultButton from '../../../../components/uikit/DefaultButton';
import {useNavigation, useRoute} from '@react-navigation/native';

import {COLORS} from '../../../../constants/colors';
import requests, {assetUrl} from '@api/requests';
import {LoginResponse} from '@api/types';
import {STRINGS} from '@locales/strings';
import {launchImageLibrary} from 'react-native-image-picker';
import {ROUTES} from '@constants/routes';

type personalDataChangeType = {
  name?: string;
  phone?: string;
  email?: string;
  password?: string;
  gender?: string;
  birthday?: string;
  photo?: string;
  address_legal?: string;
};
const PersonalDataChange = () => {
  const navigation: any = useNavigation();

  const data: any = useRoute();
  const userData = data.params;

  const [state, setState] = useState<LoginResponse>({
    gender: '',
    name: '',
    phone: '',
    photo: '',
    birthday: '',
    email: '',
    last_address: '',
    inn: '',
    middleName: '',
    requisites: '',
    certificateStateRegistration: '',
    adres_0: '',
  });
  const [image, setImage] = useState<any>({});
  const [animation, setAnimation] = useState(false);

  let onStateChange = (key: string) => (value: string) => {
    setState({...state, [key]: value});
  };

  let onUpdateProfile = async () => {
    try {
      setAnimation(true);
      let res = await requests.profile.editProfile(state);
      setAnimation(false);
      navigation.navigate(ROUTES.PERSONALDATE, image);
    } catch (error) {
      console.log(error);
    }
  };

  const changePhoto = () => {
    launchImageLibrary({mediaType: 'photo'}, ({assets}) => {
      if (assets) {
        const img = {
          uri: assets[0].uri,
          type: assets[0].type,
          name: assets[0].fileName,
        };
        setImage(img);
      }
    });
    setState({...state, photo: image});
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white, paddingBottom: 50}}>
      <GoBackHeader />
      <ScrollView>
        <AllProductTitle title="Личные данные" color={true} />

        <View style={style.ProfileInfo}>
          {image.uri ? (
            <Image
              style={style.ProfileImage}
              source={{
                uri: image.uri,
              }}
            />
          ) : (
            <Image
              style={style.ProfileImage}
              source={require('../../../../assets/images/profile.png')}
            />
          )}

          <TouchableOpacity
            onPress={changePhoto}
            hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
            style={style.ProfileInfoTextBox}>
            <Text style={style.ProfileInfoText}>Изменить фото профиля</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 15}}>
          <DefaultInput
            value={state.adres_0}
            onChangeText={onStateChange('adres_0')}
            label="Наименование учреждения"
            backgroundColor={COLORS.noActiveButtonBgColor2}
          />
          <DefaultInput
            value={state.inn}
            onChangeText={onStateChange('inn')}
            label="ИНН"
            backgroundColor={COLORS.noActiveButtonBgColor2}
          />
          <DefaultInput
            value={state.certificateStateRegistration}
            onChangeText={onStateChange('certificateStateRegistration')}
            label="Свидетельство гос.регистрации"
            backgroundColor={COLORS.noActiveButtonBgColor2}
          />
          <DefaultInput
            value={state.last_address}
            onChangeText={onStateChange('last_address')}
            label="Свидетельство НДС"
            backgroundColor={COLORS.noActiveButtonBgColor2}
          />
          <DefaultInput
            value={state.requisites}
            onChangeText={onStateChange('requisites')}
            label="Реквизиты"
            backgroundColor={COLORS.noActiveButtonBgColor2}
          />
          <DefaultInput
            value={state.name}
            onChangeText={onStateChange('name')}
            label="Имя"
            backgroundColor={COLORS.noActiveButtonBgColor2}
          />
          <DefaultInput
            value={state?.lastName}
            onChangeText={onStateChange('lastName')}
            label="Фамилия"
            backgroundColor={COLORS.noActiveButtonBgColor2}
          />
          <DefaultInput
            value={state?.middleName}
            onChangeText={onStateChange('middleName')}
            label="Отчество"
            backgroundColor={COLORS.noActiveButtonBgColor2}
          />
          <DefaultInput
            value={state?.phone}
            onChangeText={onStateChange('phone')}
            label="Телефон"
            backgroundColor={COLORS.noActiveButtonBgColor2}
          />
          <DefaultInput
            value={state?.birthday}
            onChangeText={onStateChange('birthday')}
            label="Дата рождения"
            backgroundColor={COLORS.noActiveButtonBgColor2}
          />
          <View>
            <TouchableOpacity style={style.button} onPress={onUpdateProfile}>
              {animation ? (
                <ActivityIndicator
                  size="small"
                  color={COLORS.red}
                  animating={animation}
                />
              ) : (
                <Text style={style.buttonText}>Сохранить</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PersonalDataChange;

const style = StyleSheet.create({
  button: {
    width: '100%',
    height: 55,
    marginTop: 47,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: '#84A9C0',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
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
