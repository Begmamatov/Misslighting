module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@images': './src/assets/images',
          '@auth': './src/screens/Auth',
          '@home': './src/screens/Home',
          '@constants': './src/constants',
          '@routes': './src/routes',
          '@icons': './src/assets/icons',
          '@assets': './src/assets',
          '@locales': './src/locales',
          '@api': './src/api',
          '@store': './src/service',
        },
      },
    ],
  ],
};
