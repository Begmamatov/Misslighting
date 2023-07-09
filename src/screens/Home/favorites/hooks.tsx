import requests from '@api/requests';
import {ROUTES} from '@constants/routes';
import {STRINGS} from '@locales/strings';
import {useNavigation} from '@react-navigation/native';
import useLoading from '@store/Loader/useLoading';
import {useAppSelector} from '@store/hooks';
import {favoriteArraySelector, loadFavorite} from '@store/slices/favoriteSlice';
import {selectUser} from '@store/slices/userSlice';
import {useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

export const useFavoritesHook = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState(STRINGS.ru.recentlyAdded);
  const dispatch = useDispatch();

  const loading = useLoading();

  let favoritesArray = useSelector(favoriteArraySelector);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const user = useAppSelector(selectUser);
  let navigation: any = useNavigation();

  const getFavs = async () => {
    try {
      if (!user.token) {
        return Alert.alert(`Oшибка `, 'вы не зарегистрированы', [
          {
            text: 'Ок',
            onPress: () => navigation.navigate(ROUTES.AUTH as never),
          },
        ]);
      } else if (!!user.token) {
        loading?.onRun();
      }
      loading?.onRun();
      let res = await requests.favorites.getFavorites();
      dispatch(loadFavorite(res.data.data));
    } catch (error) {
      console.log(error);
    } finally {
      loading?.onClose();
    }
  };

  return {
    favorites: favoritesArray,
    toggleModal,
    isModalVisible,
    modalText,
    getFavs,
  };
};
