import {useEffect, useState} from 'react';
import {ProductItemResponse} from '@api/types';
import requests from '@api/requests';

export const useSearchHook = () => {
  let [result, setResult] = useState<ProductItemResponse[]>([]);
  const [state, setState] = useState({
    text: '',
  });

  const searchWithQuery = async () => {
    try {
      let res = await requests.products.searchProducts(state.text);
      setResult(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  let onStateChange = (key: string) => (value: string) => {
    setState({...state, [key]: value});
  };

  useEffect(() => {
    searchWithQuery();
    // debounce(() => searchWithQuery(), 500);
  }, [state.text]);

  return {result, onStateChange};
};
