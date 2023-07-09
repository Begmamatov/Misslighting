import {assetUrl} from '@api/requests';
import {LoginResponse} from '@api/types';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import {selectUser} from '@store/slices/userSlice';
import React, {useEffect} from 'react';
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
  NewDiscountIcon,
  NewLocationIcon,
  NewLogOutIcon,
  NewMessageIcon,
  NewNotificationIcon,
  NewTranstionIcon,
} from '../../../assets/icons/icons';
import ProductsTitle from '../../../components/uikit/ProductsTitle';
import {ROUTES} from '../../../constants/routes';
import SettingsItem from './Setting/SettingItem';
import {COLORS} from '@constants/colors';
import {deleteAccountData, getProfileData} from '@store/slices/ProfileSlice';
import {useSelector} from 'react-redux';
import {RootState} from '@store/configureStore';

export default function ProfileScreen() {
  const navigation: any = useNavigation();
  const isFocused = useIsFocused();
  const dispatch: any = useAppDispatch();
  const profileStore = useSelector((store: RootState) => store.profile);
  type ProfileData = Partial<LoginResponse>;
  // let [profileData, setProfileData] = useState<ProfileData>();
  // const [animate2, setAnimate2] = useState(false);

  let onLogOut = () => {
    navigation.navigate(ROUTES.AUTH as never);
  };

  useEffect(() => {
    isFocused && dispatch(getProfileData());
  }, [isFocused]);
  const user = useAppSelector(selectUser);

  const ubdeteProfile = () => {
    user.token
      ? navigation.navigate(ROUTES.PERSONALDATE as never, profileStore as never)
      : Alert.alert('Зарегистрируйте чтобы добавить в корзину');
  };

  return (
    <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
      <ProductsTitle title="Профиль" showButton={false} />
      <View style={style.ProfileInfo}>
        {user?.token ? (
          <Image
            style={style.ProfileImage}
            source={{uri: assetUrl + profileStore?.photo}}
          />
        ) : (
          <View style={[style.ProfileImage]}></View>
        )}
        <View style={style.ProfileInfoTextBox}>
          <Text style={style.ProfileInfoTextName}>{profileStore?.name}</Text>

          <View style={{width: '80%'}}>
            <TouchableOpacity onPress={ubdeteProfile}>
              <Text style={style.ProfileInfoText}>Изменить личные данные</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <SettingsItem
        onPress={() => navigation.navigate(ROUTES.MY_PRODUCTS as never)}
        text={'Мои заказы'}
        icon={() => <NewBasketIcon />}
        icon2={() => <NewArrowIcon />}
      />
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

      {/* <TouchableOpacity style={style.logOutButton} onPress={onLogOut}>
        <NewLogOutIcon />
        <Text style={style.logOutButtonText}>Войти</Text>
      </TouchableOpacity> */}
      <View
        style={{
          width: '100%',
          paddingHorizontal: 15,
        }}>
        {user.token && (
          <TouchableOpacity
            style={style.butto2}
            onPress={() => dispatch(deleteAccountData())}>
            {profileStore.isLoadingOfBtn ? (
              <ActivityIndicator
                size="small"
                color={COLORS.white}
                animating={profileStore.isLoadingOfBtn}
              />
            ) : (
              <Text style={{color: COLORS.white}}>Удалить аккаунт</Text>
            )}
          </TouchableOpacity>
        )}
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
    marginTop: 20,
  },
});
