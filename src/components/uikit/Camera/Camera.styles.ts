import {StyleSheet, Dimensions} from 'react-native'

const {width} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cameraBtn: {
    position: 'absolute',
    bottom: 48,
    width: 70,
    height: 70,
    left: width * 0.5 - 35
  }
})
