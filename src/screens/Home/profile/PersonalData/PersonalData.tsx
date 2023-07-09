import requests, {assetUrl} from '@api/requests';
import {LoginResponse} from '@api/types';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import AllProductTitle from '../../../../components/uikit/AllProductTitle';
import GoBackHeader from '../../../../components/uikit/Header/GoBackHeader';
import DefaultInput from '../../../../components/uikit/TextInput';
import {COLORS} from '../../../../constants/colors';
type ProfileData = Partial<LoginResponse>;

const PersonalData = () => {
  const {params}: any = useRoute();
  const [url, setUrl] = useState<any>(assetUrl + params?.photo);
  const [animate, setAnimate] = useState(false);
  const navigation = useNavigation();

  const [state, setState] = useState<any>({
    gender: params?.gender ?? '',
    name: params?.name ?? '',
    phone: params?.phone ?? '',
    birthday: params?.birthday ?? '',
    last_address: params?.last_address ?? '',
    inn: params?.inn ?? '',
    // middleName: params?.middleName ?? '',
    requisites: params?.requisites ?? '',
    certificateStateRegistration: params?.certificateStateRegistration ?? '',
    adres_0: params?.adres_0 ?? '',
  });

  let onStateChange = (key: string) => (value: string) => {
    setState({...state, [key]: value});
  };

  let onUpdateProfile = async () => {
    try {
      setAnimate(true);
      let res = await requests.profile.editProfile(state);
      setAnimate(false);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  const changePhoto = async () => {
    await launchImageLibrary({mediaType: 'photo'}, ({assets}: any) => {
      if (assets) {
        setUrl(assets[0].uri);
        setState({
          ...state,
          photo: {
            name: assets[0].fileName,
            type: assets[0].type,
            uri:
              Platform.OS === 'ios'
                ? assets[0].uri.replace('file://', '')
                : assets[0].uri,
          },
        });
      }
    });
  };

  return (
    <View style={{marginBottom: 100, backgroundColor: COLORS.white}}>
      <GoBackHeader />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={60}>
        <ScrollView>
          <AllProductTitle title="Личные данные" color={true} />
          <View style={style.ProfileInfo}>
            <Image style={style.ProfileImage} source={{uri: url}} />
            <TouchableOpacity
              onPress={changePhoto}
              style={style.ProfileInfoTextBox}>
              <Text style={style.ProfileInfoText}>Добавить</Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingHorizontal: 15}}>
            {params?.type === 'yur' ? (
              <DefaultInput
                label="Наименование учреждения"
                backgroundColor={COLORS.noActiveButtonBgColor2}
              />
            ) : null}
            {params?.type === 'yur' ? (
              <DefaultInput
                value={state.inn}
                onChangeText={onStateChange('inn')}
                label="ИНН"
                backgroundColor={COLORS.noActiveButtonBgColor2}
                // placeholder={params.inn}
              />
            ) : null}
            {params?.type === 'yur' ? (
              <DefaultInput
                value={state.certificateStateRegistration}
                onChangeText={onStateChange('certificateStateRegistration')}
                label="Свидетельство гос.регистрации"
                backgroundColor={COLORS.noActiveButtonBgColor2}
              />
            ) : null}
            {params?.type === 'yur' ? (
              <DefaultInput
                value={state.last_address}
                onChangeText={onStateChange('last_address')}
                label="Свидетельство НДС"
                backgroundColor={COLORS.noActiveButtonBgColor2}
              />
            ) : null}
            {params?.type === 'yur' ? (
              <DefaultInput
                value={state.requisites}
                onChangeText={onStateChange('requisites')}
                label="Реквизиты"
                backgroundColor={COLORS.noActiveButtonBgColor2}
              />
            ) : null}

            <DefaultInput
              label="Номер телефона"
              backgroundColor={COLORS.noActiveButtonBgColor2}
              // placeholder={params?.phone}
              onChangeText={onStateChange('phone')}
              value={state.phone}
              defaultValue={state.phone}
              typeOf="phone-pad"
            />

            <DefaultInput
              label="Имя"
              backgroundColor={COLORS.noActiveButtonBgColor2}
              // placeholder={params?.name}
              onChangeText={onStateChange('name')}
              value={state.name}
            />
            {/* <DefaultInput
            label="Фамилия"
            backgroundColor={COLORS.noActiveButtonBgColor2}
            placeholder={params?.lastName}
          /> */}
            {/* <DefaultInput
            label="Отчество"
            backgroundColor={COLORS.noActiveButtonBgColor2}
            // placeholder={params?.middleName}
            onChangeText={onStateChange('middleName')}
            value={state.middleName}
          /> */}

            <DefaultInput
              label="Дата рождения"
              isDate
              backgroundColor={COLORS.noActiveButtonBgColor2}
              // placeholder={params?.birthday}
              onChangeText={onStateChange('birthday')}
              value={state.birthday}
              typeOf="number-pad"
              defaultValue={state.birthday}
            />
            {/* <DefaultInput
            label="Страна"
            backgroundColor={COLORS.noActiveButtonBgColor2}
            placeholder={params?.country}
          /> */}
            <DefaultInput
              label="Город"
              backgroundColor={COLORS.noActiveButtonBgColor2}
              // placeholder={params?.last_address}
              // onChangeText={onStateChange('last_address')}
              // value={state.last_address}
            />
            <Text>Адрес</Text>
            <DefaultInput
              label="Улица"
              backgroundColor={COLORS.noActiveButtonBgColor2}
              // placeholder={params?.addresses}
            />
            <DefaultInput
              label="Дом"
              backgroundColor={COLORS.noActiveButtonBgColor2}
              // placeholder={params?.house}
            />
            <View>
              <TouchableOpacity style={style.button} onPress={onUpdateProfile}>
                {animate ? (
                  <ActivityIndicator
                    size="small"
                    color={COLORS.white}
                    animating={animate}
                  />
                ) : (
                  <Text style={{color: COLORS.white}}> Изменить</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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

  button: {
    width: '100%',
    height: 55,
    backgroundColor: COLORS.activeButtonBgColor,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
});
