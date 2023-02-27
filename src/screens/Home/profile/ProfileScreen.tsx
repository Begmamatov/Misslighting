import requests, {assetUrl} from '@api/requests';
import {LoginResponse} from '@api/types';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '@store/hooks';
import {userLoggedOut} from '@store/slices/userSlice';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  NewAdminIcon,
  NewArrowIcon,
  NewBasketIcon,
  NewLocationIcon,
  NewLogOutIcon,
  NewMessageIcon,
  NewNotificationIcon,
  NewSettingIcon,
  NewTranstionIcon,
} from '../../../assets/icons/icons';
import ProductsTitle from '../../../components/uikit/ProductsTitle';
import {ROUTES} from '../../../constants/routes';
import SettingsItem from './Setting/SettingItem';
import {COLORS} from '@constants/colors';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  type ProfileData = Partial<LoginResponse>;
  let [profileData, setProfileData] = useState<ProfileData>();
  const [animate2, setAnimate2] = useState(false);

  let onLogOut = () => {
    Alert.alert('Вы точно хотите выйти из аккаунта ?', '', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          dispatch(userLoggedOut());
          // navigation.navigate(ROUTES.LOGIN as never);
        },
      },
    ]);
  };
  let fetchData = async () => {
    try {
      let res = await requests.profile.getProfile();
      setProfileData(res.data.data);
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  };
  const detailAccount = async () => {
    try {
      setAnimate2(true);
      let {data} = await requests.profile.removAcount();
      dispatch(userLoggedOut());

      setAnimate2(false);
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView style={style.container}>
      <ProductsTitle title="Профиль" showButton={false} />
      <View style={style.ProfileInfo}>
        <Image
          style={style.ProfileImage}
          source={{uri: assetUrl + profileData?.photo}}
        />
        <View style={style.ProfileInfoTextBox}>
          <Text style={style.ProfileInfoTextName}>{profileData?.name}</Text>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                ROUTES.PERSONALDATE as never,
                profileData as never,
              )
            }>
            <Text style={style.ProfileInfoText}>Изменить личные данные</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SettingsItem
        onPress={() => navigation.navigate(ROUTES.MY_PRODUCTS as never)}
        text={'Мои заказы'}
        icon={() => <NewBasketIcon />}
        icon2={() => <NewArrowIcon />}
      />
      {/* <SettingsItem
        onPress={() => navigation.navigate(ROUTES.PROFILE_SETTING as never)}
        text={'Настройки'}
        icon={() => <NewSettingIcon />}
        icon2={() => <NewArrowIcon />}
      /> */}
      <SettingsItem
        text={'Мы на карте'}
        icon={() => <NewLocationIcon />}
        icon2={() => <NewArrowIcon />}
      />
      <SettingsItem
        onPress={() => navigation.navigate(ROUTES.TECHNICALSUPPORT as never)}
        text={'Техническая поддержка'}
        icon={() => <NewAdminIcon />}
        icon2={() => <NewArrowIcon />}
      />
      {/* <SettingsItem
        onPress={() => navigation.navigate(ROUTES.BONUSPROGRAM as never)}
        text={'Бонусная программа'}
        icon={() => <NewDiscountIcon />}
        icon2={() => <NewArrowIcon />}
      /> */}
      <SettingsItem
        onPress={() => navigation.navigate(ROUTES.TRANSACTIONS as never)}
        text={'Транзакции'}
        icon={() => <NewTranstionIcon />}
        icon2={() => <NewArrowIcon />}
      />
      <SettingsItem
        onPress={() =>
          navigation.navigate(ROUTES.PROFILE_NOTIFICATION as never)
        }
        text={'Уведомления'}
        icon={() => <NewNotificationIcon />}
        icon2={() => <NewArrowIcon />}
      />
      <SettingsItem
        onPress={() => navigation.navigate(ROUTES.MESSAGE as never)}
        text={'Сообщения'}
        icon={() => <NewMessageIcon />}
        icon2={() => <NewArrowIcon />}
      />

      <TouchableOpacity style={style.logOutButton} onPress={onLogOut}>
        <NewLogOutIcon />
        <Text style={style.logOutButtonText}>Выйти из аккаунта</Text>
      </TouchableOpacity>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 15,
        }}>
        <TouchableOpacity style={style.butto2} onPress={detailAccount}>
          {animate2 ? (
            <ActivityIndicator
              size="small"
              color={COLORS.white}
              animating={animate2}
            />
          ) : (
            <Text style={{color: COLORS.white}}> Удалить аккаунт</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

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
    marginBottom: 20,
    marginHorizontal: 15,
  },
  logOutButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000',
  },
  butto2: {
    height: 55,
    backgroundColor: COLORS.red,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    paddingHorizontal: 15,
  },
});
