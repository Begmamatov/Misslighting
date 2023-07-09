import React from 'react';
import {ViewStyle} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

interface CameraButtonProps {
  color?: string;
  width?: number;
  height?: number;
  style?: ViewStyle;
}

const CameraButton = (props: CameraButtonProps) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      fill={'none'}
      viewBox="0 0 57 57"
      style={props.style}>
      <Circle cx="28.5" cy="28.5" r="22.5" fill={props.color} />
      <Circle cx="28.5" cy="28.5" r="27" stroke={props.color} strokeWidth="3" />
    </Svg>
  );
};

export default CameraButton;
