import React from 'react';
import {
  KeyboardAvoidingView as KeyboardAvoidingViewRN,
  Platform
} from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const DEFAULT_HEADER_HEIGHT = 65;
const IPHONEX_HEADER_HEIGHT = 90;

type Props = {
  /** @type {string} padding or position (see RN KeyboardAvoidingView doc) */
  behavior: any,
  /** @type {number} Extra padding / repositioning amount to handle a header at the top of screen */
  keyboardVerticalOffset: number,
  /** @type {boolean} If true, tapping outside the keyboard will close the  keyboard */
  keyboardShouldPersistTaps: boolean,
  /** @type {boolean} Enable or disable the keyboard avoiding view */
  enabled: boolean,
  /** @type {object} Any additional styling for this keyboard avoiding view */
  style: object,
  /** @type {object} Any additional styling for this keyboard avoiding view inner container */
  containerStyle: object,
  /** @type {Any} The children components surrounded by this KeyboardAvoidingView */
  children: any
};

const KeyboardAvoidingView = (props: Props) => {
  const {
    behavior,
    keyboardVerticalOffset,
    enabled,
    style,
    containerStyle
  } = props;
  return (
    <KeyboardAvoidingViewRN
      keyboardVerticalOffset={keyboardVerticalOffset}
      behavior={behavior}
      enabled={enabled}
      style={style}
      contentContainerStyle={containerStyle}
    >
      {props.children}
    </KeyboardAvoidingViewRN>
  );
}

KeyboardAvoidingView.defaultProps = {
  behavior: Platform.OS === 'ios' ? 'padding' : null,
  ...ifIphoneX(
    {
      keyboardVerticalOffset: IPHONEX_HEADER_HEIGHT
    },
    {
      keyboardVerticalOffset: DEFAULT_HEADER_HEIGHT
    }
  ),
  keyboardShouldPersistTaps: true,
  enabled: true,
  style: {
    flexDirection: 'column',
    flex: 1
  },
  containerStyle: null
}

export default KeyboardAvoidingView;