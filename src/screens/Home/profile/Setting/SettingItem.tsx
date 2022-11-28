import {COLORS} from '@constants/colors';
import React, {ReactElement} from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SvgProps} from 'react-native-svg';

export interface SettingsItemProps {
  icon?: (props: SvgProps) => JSX.Element;
  icon2?: (props: SvgProps) => JSX.Element;
  text?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const SettingsItem = ({
  icon: Icon,
  text,
  onPress,
  icon2: Icon2,
}: SettingsItemProps) => {
  return (
    <TouchableOpacity style={styles.settingsButton} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.icon}>{Icon ? <Icon /> : null}</View>
        <Text style={styles.text}>{text}</Text>
      </View>
      {Icon2 ? <Icon2 /> : null}
    </TouchableOpacity>
  );
};

export default SettingsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#E1E1E1',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 17,
    elevation: 1,
    marginBottom: 15,
    marginHorizontal: 15,
  },

  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000',
  },

  icon: {
    width: 30,
  },
});
