import React from 'react';

import {useNavigation} from '@react-navigation/native';
import WelcomeScreen from '../../../components/template/WelcomeScreen';
import FlagButton from '../../../components/uikit/FlagButton';
import {ROUTES} from '../../../constants/routes';

export default function LanguageScreen(props: any) {
  const navigation = useNavigation();

  return (
    <WelcomeScreen title="Выберите язык">
      <FlagButton
        flagName="ru"
        title="Русский"
        onPress={() => {
          navigation.navigate(ROUTES.LOGIN as never);
        }}
      />
      <FlagButton
        flagName="uz"
        title="O'zbek"
        onPress={() => {
          navigation.navigate(ROUTES.LOGIN as never);
        }}
      />
      <FlagButton
        flagName="en"
        title="English"
        onPress={() => {
          navigation.navigate(ROUTES.LOGIN as never);
        }}
      />
    </WelcomeScreen>
  );
}
