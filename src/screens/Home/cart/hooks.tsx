import requests from '@api/requests';
import {loadCart} from '@store/slices/cartSlice';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

export const useCartScreenHooks = () => {
  const dispatch = useDispatch();
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

  return {onClearCart};
};
