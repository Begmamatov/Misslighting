import requests from '@api/requests';
import useLoading from '@store/Loader/useLoading';
import {loadCart} from '@store/slices/cartSlice';
import {useDispatch} from 'react-redux';

export const useCartScreenHooks = () => {
  const dispatch = useDispatch();
  const loading = useLoading();

  const getCart = async () => {
    try {
      loading?.onRun();
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
