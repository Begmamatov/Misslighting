import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  onPress: () => void;
  title: string;
  flagName: string;
};

export default function FlagButton(props: Props) {
  let imgRequire;
  if (props.flagName === 'ru') {
    imgRequire = require('../../assets/images/ru.png');
  } else if (props.flagName === 'en') {
    imgRequire = require('../../assets/images/en.png');
  } else if (props.flagName === 'uz') {
    imgRequire = require('../../assets/images/uz.png');
  } else {
    imgRequire = require('../../assets/images/en.png');
  }

  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Image source={imgRequire} style={styles.flagIcon} />
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 64,
    backgroundColor: '#fff',
    borderRadius: 45,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 26,
    marginBottom: 15,
  },
  flagIcon: {
    width: 30,
    height: 30,
    marginRight: 25,
  },
  buttonText: {
    fontSize: 17,
    lineHeight: 48,
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#000',
  },
});
