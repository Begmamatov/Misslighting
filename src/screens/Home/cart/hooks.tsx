import requests from '@api/requests';
import {ROUTES} from '@constants/routes';
import {useNavigation} from '@react-navigation/native';
import useLoading from '@store/Loader/useLoading';
import {useAppSelector} from '@store/hooks';
import {loadCart} from '@store/slices/cartSlice';
import {selectUser} from '@store/slices/userSlice';
import {useEffect} from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';

export const useCartScreenHooks = () => {
  const dispatch = useDispatch();
  const loading = useLoading();
  const user = useAppSelector(selectUser);
  let navigation: any = useNavigation();

  const getCart = async () => {
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
      const response = await requests.products.getCarts();
      dispatch(loadCart(response.data.data));
    } catch (error) {
      console.log(error);
    } finally {
      loading?.onClose();
    }
  };

  const onClearCart = async () => {
    try {
      let res = await requests.products.clearCart();
      let cartGet = await requests.products.getCarts();
      dispatch(loadCart(cartGet.data.data));
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return {onClearCart, getCart};
};
