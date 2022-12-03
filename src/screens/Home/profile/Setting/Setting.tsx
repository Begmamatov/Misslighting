import {
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import GoBackHeader from '../../../../components/uikit/Header/GoBackHeader';
import AllProductTitle from '@components/uikit/AllProductTitle';
import {COLORS} from '@constants/colors';
import DefaultButton from '@components/uikit/DefaultButton';

const Setting = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <GoBackHeader />
      <AllProductTitle title="Настройки" color={true} />

      <View style={styles.switchContainer}>
        <View style={styles.switchContext}>
          <Text style={styles.switchText}>Получать Push-уведомления</Text>
          <Switch
            hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
            trackColor={{false: '#767577', true: '#84A9C0'}}
            thumbColor={isEnabled ? '#1f5c81' : COLORS.white}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.switchContext}>
          <Text style={styles.switchText}>Получать SMS-уведомления</Text>
          <Switch
            hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
            trackColor={{false: '#767577', true: '#84A9C0'}}
            thumbColor={isEnabled2 ? '#1f5c81' : COLORS.white}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 48,
          position: 'absolute',
          bottom: 66,
          width: '100%',
        }}>
        <DefaultButton
          title="Сохранить"
          ButtonStyle={{backgroundColor: '#84A9C0'}}
          TextStyle={{color: COLORS.white}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  HeaderText: {
    fontSize: 25,
    fontWeight: '600',
    zIndex: 100,
  },
  saveBtn: {
    position: 'absolute',
    bottom: 66,
    backgroundColor: '#84A9C0',
    marginHorizontal: 48,
    borderRadius: 45,
    paddingHorizontal: 95,
    paddingVertical: 15,
    display: 'flex',
    alignItems: 'center',
  },
  switchContainer: {
    marginTop: 26,
  },
  switchContext: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  switchText: {
    color: '#C8C8C8',
  },
});
function setIsEnabled(arg0: (previousState: any) => boolean) {
  throw new Error('Function not implemented.');
}
