import {View, Text} from 'react-native';
import React from 'react';
import SingUpTemplate from '../../../components/template/SingUpTemplate';
import SectionTitle from '../../../components/uikit/SectionTitle';
import DefaultInput from '../../../components/uikit/TextInput';
import DefaultButton from '../../../components/uikit/DefaultButton';
import {ROUTES} from '../../../constants/routes';
import {COLORS} from '../../../constants/colors';

export default function SignUpSMS(props: any) {
  const onPressNext = () => {
    props.navigation.navigate(ROUTES.TABS);
  };

  return (
    <SingUpTemplate>
      <SectionTitle title="Введите код" marginBottom={36} />
      <Text style={{marginBottom: 25}}>
        Мы отправили код на{' '}
        <Text style={{fontWeight: '600'}}>+99899 999 99 99</Text>
      </Text>
      <Text style={{color: '#84A9C0', marginBottom: 25}}>Изменить номер</Text>
      <DefaultInput
        placeholder="Код подтверждения"
        label="Введите полученный код"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
      />
      <Text style={{color: '#84A9C0', marginBottom: 25}}>
        Отправить повторно через 0:59
      </Text>
      <DefaultButton
        title="Переотправить"
        ButtonStyle={{
          backgroundColor: COLORS.noActiveButtonBgColor2,
          width: '100%',
        }}
        TextStyle={{color: COLORS.labelText}}
      />
      <DefaultButton
        onPress={onPressNext}
        title="Подтвердить"
        ButtonStyle={{
          backgroundColor: COLORS.activeButtonBgColor,
          width: '100%',
        }}
        TextStyle={{color: COLORS.white}}
      />
      <Text style={{color: '#84A9C0', marginBottom: 25}}>
        Уже зарегистрированы?
      </Text>
    </SingUpTemplate>
  );
}
