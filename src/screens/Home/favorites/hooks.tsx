import requests from '@api/requests';
import {STRINGS} from '@locales/strings';
import {favoriteArraySelector, loadFavorite} from '@store/slices/favoriteSlice';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const useFavoritesHook = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState(STRINGS.ru.recentlyAdded);
  const dispatch = useDispatch();
  let fav = useSelector(favoriteArraySelector);

  let favoritesArray = useSelector(favoriteArraySelector);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const getFavs = async () => {
    try {
      let res = await requests.favorites.getFavorites();
      dispatch(loadFavorite(res.data.data));
    } catch (error) {
      console.log(error);
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
