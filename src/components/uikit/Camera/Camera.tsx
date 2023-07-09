import {useIsFocused} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Linking, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Camera as RNCamera, useCameraDevices} from 'react-native-vision-camera';

import {COLORS} from '@constants/colors';
import {styles} from './Camera.styles';
import CameraButton from './CameraButton';

const CameraScreen = () => {
  const camera: any = useRef(null);
  const isFocused = useIsFocused();
  const devices = useCameraDevices();
  const device = devices.back;
  const [showCamera, setShowCamera] = useState(false);
  const [imageSource, setImageSource] = useState('');

  const getPermission = useCallback(async () => {
    const permission = await RNCamera.requestCameraPermission();
    if (permission == 'denied') await Linking.openSettings();
  }, [RNCamera]);

  useEffect(() => {
    isFocused && getPermission();
  }, []);

  const capturePhote = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({
        flash: 'off',
        qualityPrioritization: 'speed',
      });
      setImageSource(photo.path);
      setShowCamera(false);
    }
  };

  // console.log(imageSource);

  if (!device) return <View />;

  return (
    <View style={styles.container}>
      {showCamera ? (
        <>
          <RNCamera
            ref={camera}
            device={device}
            style={StyleSheet.absoluteFill}
            isActive={showCamera}
            enableZoomGesture={true}
            photo={true}
          />

          <TouchableOpacity style={styles.cameraBtn} onPress={capturePhote}>
            <CameraButton color={COLORS.white} />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <RNCamera
            ref={camera}
            device={device}
            style={StyleSheet.absoluteFill}
            isActive={showCamera}
            enableZoomGesture={true}
            photo={true}
          />

          <TouchableOpacity style={styles.cameraBtn} onPress={capturePhote}>
            <CameraButton color={COLORS.white} />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default CameraScreen;
