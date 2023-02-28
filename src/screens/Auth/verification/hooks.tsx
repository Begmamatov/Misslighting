import requests from '@api/requests';
import {useAppDispatch} from '@store/hooks';
import {userLoggedIn} from '@store/slices/userSlice';
import {validatePhoneNumber} from '@constants/validation';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {ROUTES} from '@constants/routes';

let timer = -1;

type RouteParams = {
  params: {
    token: string;
    phone: string;
  };
};

const useVerificationHook = () => {
  const route = useRoute() as RouteProp<RouteParams>;
  let dispatch = useAppDispatch();
  let navigation = useNavigation();
  const [timeLeft, setTimeLeft] = useState(10);
  const [loading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState<{code: string; phone: string}>({
    code: '',
    phone: route.params?.phone ? route.params?.phone : '',
  });

  const startTimer = () => {
    timer = setTimeout(() => {
      if (timeLeft <= 0) {
        clearTimeout(timer);
        return false;
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return timer;
  };

  useEffect(() => {
    startTimer();
    return () => clearTimeout(timer);
  });

  let resendCode = async () => {
    setTimeLeft(10);
  };

  let onVerificate = async () => {
    //validate phone matches +998 ** *** ** **
    if (validatePhoneNumber(state.phone as string)) {
      //send data to remote
      try {
        setLoading(true);
        let res = await requests.auth.verify(state, route.params?.token);
        dispatch(userLoggedIn(res.data.data));
        navigation.navigate(ROUTES.HOME as never);
      } catch (error) {
        // console.warn(error.toJSON());
        // console.warn(error.response.data);
      } finally {
        setLoading(false);
      }
    }
  };
  let onChangePhoneNumber = () => navigation.goBack();

  let onStateChange = (key: string) => (value: string) => {
    setState({...state, [key]: value});
  };

  return {
    timeLeft,
    onChangePhoneNumber,
    onVerificate,
    state,
    onStateChange,
    loading,
    resendCode,
  };
};

export default useVerificationHook;
