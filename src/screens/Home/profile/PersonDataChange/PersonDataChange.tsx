// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const PersonDataChange = () => {
//   return (
//     <View>
//       <Text>PersonDataChange</Text>
//     </View>
//   );
// };

// export default PersonDataChange;

// const styles = StyleSheet.create({});
import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SingUpTemplate from '@components/template/SingUpTemplate';
import SectionTitle from '@components/uikit/SectionTitle';
import {COLORS} from '@constants/colors';
import DefaultInput from '@components/uikit/TextInput';
import DefaultButton from '@components/uikit/DefaultButton';
import {useNavigation, useRoute} from '@react-navigation/native';

const PersonDataChange = (props: any) => {
  let {params}: any = useRoute();

  let navigation = useNavigation();
  return (
    <SingUpTemplate>
      <SectionTitle title="Введите код" marginBottom={36} />
      <Text style={{marginBottom: 25, color: COLORS.labelText}}>
        Мы отправили код на{' '}
        <Text style={{fontWeight: '700', color: COLORS.labelText}}>
          {params.phone}
        </Text>
      </Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{color: '#84A9C0', marginBottom: 25}}>Изменить номер</Text>
      </TouchableOpacity>
      <DefaultInput
        placeholder="Код подтверждения"
        label="Введите полученный код"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
      />

      <Text style={{color: '#84A9C0', marginBottom: 25}}>
        Отправить повторно через
      </Text>

      <DefaultButton
        title="Переотправить"
        ButtonStyle={{
          backgroundColor: COLORS.noActiveButtonBgColor2,
          width: '100%',
          marginTop: 10,
        }}
        TextStyle={{color: COLORS.labelText}}
      />
      <DefaultButton
        title="Подтвердить"
        ButtonStyle={{
          backgroundColor: COLORS.activeButtonBgColor,
          width: '100%',
        }}
        TextStyle={{color: COLORS.white}}
      />
      <TouchableOpacity>
        <Text style={{color: '#84A9C0', marginBottom: 25}}>
          Уже зарегистрированы?
        </Text>
      </TouchableOpacity>
    </SingUpTemplate>
  );
};
export default PersonDataChange;
