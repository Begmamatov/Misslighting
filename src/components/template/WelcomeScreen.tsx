import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function WelcomeScreen(props: Props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/bg.png')}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <View style={styles.box}>
          <Text style={styles.text}>{props.title}</Text>
          {props.children}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '90%',
    borderRadius: 18,
    backgroundColor: 'rgba(131, 131, 131, 0.5);',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    paddingVertical: 30,
    paddingBottom: 50,
  },
  text: {
    fontSize: 24,
    lineHeight: 48,
    fontWeight: 'bold',
    marginBottom: 28,
    color: '#000',
  },
});
