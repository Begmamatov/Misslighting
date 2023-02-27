import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/colors';
import MaskInput, {Masks} from 'react-native-mask-input';

type Props = {
  label?: string;
  placeholder?: string;
  backgroundColor?: string;
  color?: string;
  placeholderColor?: string;
  marginBottom?: number;
  onChangeText?: (val: string) => void;
  value?: string;
  onFocus?: () => void;
  defaultValue?: any;
  typeOf?: KeyboardTypeOptions;
  isDate?: boolean;
};

export default function DefaultInput(props: Props) {
  return (
    <View style={[styles.inputBox, {marginBottom: props.marginBottom}]}>
      {props.label && <Text style={styles.inputLabel}>{props.label}</Text>}

      {props.isDate ? (
        <MaskInput
          mask={Masks.DATE_DDMMYYYY}
          onChangeText={props.onChangeText}
          value={props.value}
          onFocus={props.onFocus}
          placeholderTextColor={
            props.placeholderColor ? props.placeholderColor : '#000'
          }
          style={[
            styles.input,
            {
              backgroundColor: props.backgroundColor,
              color: props.color ? props.color : '#000',
            },
          ]}
        />
      ) : (
        <TextInput
          placeholder={props.placeholder}
          onFocus={props.onFocus}
          placeholderTextColor={
            props.placeholderColor ? props.placeholderColor : '#000'
          }
          style={[
            styles.input,
            {
              backgroundColor: props.backgroundColor,
              color: props.color ? props.color : '#000',
            },
          ]}
          onChangeText={props.onChangeText}
          value={props.value}
          defaultValue={props.defaultValue}
          keyboardType={props.typeOf ?? 'default'}
        />
      )}
    </View>
  );
}

DefaultInput.defaultProps = {
  backgroundColor: '#fff',
  color: '#000',
  placeholderColor: '#000',
  marginBottom: 15,
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 45,
    paddingHorizontal: 24,
    fontSize: 16,
    marginBottom: 15,
  },
  inputBox: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    color: COLORS.labelText,
    marginBottom: 15,
  },
});
