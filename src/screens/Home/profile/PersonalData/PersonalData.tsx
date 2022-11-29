import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import GoBackHeader from '../../../../components/uikit/Header/GoBackHeader';
import AllProductTitle from '../../../../components/uikit/AllProductTitle';
import DefaultInput from '../../../../components/uikit/TextInput';
import DefaultButton from '../../../../components/uikit/DefaultButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ROUTES} from '../../../../constants/routes';
import {COLORS} from '../../../../constants/colors';
import {LoginResponse} from '@api/types';
import requests, {assetUrl} from '@api/requests';

type ProfileData = Partial<LoginResponse>;
const PersonalData = () => {
  const {params}: any = useRoute();

  const navigation: any = useNavigation();

  let [profileData, setProfileData] = useState<ProfileData>();

  let fetchData = async () => {
    try {
      let res = await requests.profile.getProfile();
      setProfileData(res.data.data);
    } catch (error) {}
  };
  const onPress = () => {
    navigation.navigate(ROUTES.PersonalDataChange, {profileData});
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log('====================================');
  console.log('Profel Value', JSON.stringify(params, null, 2));
  console.log('====================================');
  return (
    <View style={{marginBottom: 100, backgroundColor: COLORS.white}}>
      <GoBackHeader />
      <ScrollView>
        <AllProductTitle title="Личные данные" color={true} />
        <View style={style.ProfileInfo}>
          {params ? (
            <Image style={style.ProfileImage} source={{uri: params.uri}} />
          ) : (
            <Image
              style={style.ProfileImage}
              source={require('../../../../assets/images/profile.png')}
            />
          )}

          <View style={style.ProfileInfoTextBox}>
            <Text style={style.ProfileInfoText}>Добавить</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 15}}>
          <DefaultInput
            label="Номер телефона"
            backgroundColor={COLORS.noActiveButtonBgColor2}
            placeholder={profileData?.phone}
          />
          <DefaultInput
            label="Имя"
            backgroundColor={COLORS.noActiveButtonBgColor2}
            placeholder={profileData?.name}
          />
          <DefaultInput
            label="Фамилия"
            backgroundColor={COLORS.noActiveButtonBgColor2}
            placeholder={profileData?.lastName}
          />
          <DefaultInput
            label="Отчество"
            backgroundColor={COLORS.noActiveButtonBgColor2}
            placeholder={profileData?.middleName}
          />
          <DefaultInput
            label="Дата рождения"
            backgroundColor={COLORS.noActiveButtonBgColor2}
            placeholder={profileData?.date}
          />
          <DefaultInput
            label="Страна"
            backgroundColor={COLORS.noActiveButtonBgColor2}
            placeholder={profileData?.country}
          />
          <DefaultInput
            label="Город"
            backgroundColor={COLORS.noActiveButtonBgColor2}
            placeholder={profileData?.last_address}
          />
          <Text>Адрес</Text>
          <DefaultInput
            label="Улица"
            backgroundColor={COLORS.noActiveButtonBgColor2}
            // placeholder={profileData?.addresses}
          />
          <DefaultInput
            label="Дом"
            backgroundColor={COLORS.noActiveButtonBgColor2}
            placeholder={profileData?.house}
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
