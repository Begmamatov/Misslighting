import React, {useCallback, useRef, useState} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Camera as RNCamera, PhotoFile} from 'react-native-vision-camera';

import RNFS from 'react-native-fs';
import Camera from '@components/uikit/Camera';

export interface CameraValue extends PhotoFile {
  base64: string;
}

const TakePicture = () => {
  const cameraRef = useRef<RNCamera | null>(null);
  const [cameraValue, updateCameraValue] = useState<CameraValue>();

  const takePicture = useCallback(async () => {
    if (!cameraRef?.current) return;
    try {
      const res = await cameraRef.current.takePhoto({
        qualityPrioritization: 'speed',
        flash: 'off',
      });
      const path = `file://${res.path}`;
      const base64 = await RNFS.readFile(path, 'base64');
      res && updateCameraValue(() => ({...res, path, base64}));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Camera ref={cameraRef} onPress={takePicture} isPressed={!!cameraValue} />
    </SafeAreaView>
  );
};

export default TakePicture;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
