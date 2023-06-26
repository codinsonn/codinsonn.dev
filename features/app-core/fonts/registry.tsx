// import {
//   Roboto_100Thin,
//   Roboto_300Light,
//   Roboto_400Regular,
//   Roboto_500Medium,
//   Roboto_700Bold,
//   Roboto_900Black,
// } from '@expo-google-fonts/roboto'

/** --- fontPaths ------------------------------------------------------------------------------ */
/** -i- Register any font paths for web preloading */
export const fontPaths = {
  // - Google Fonts -
  Roboto100: '@expo-google-fonts/roboto/Roboto_100Thin.ttf',
  Roboto200: '@expo-google-fonts/roboto/Roboto_300Light.ttf', // Fallback
  Roboto300: '@expo-google-fonts/roboto/Roboto_300Light.ttf',
  Roboto400: '@expo-google-fonts/roboto/Roboto_400Regular.ttf',
  Roboto500: '@expo-google-fonts/roboto/Roboto_500Medium.ttf',
  Roboto600: '@expo-google-fonts/roboto/Roboto_700Bold.ttf', // Fallback
  Roboto700: '@expo-google-fonts/roboto/Roboto_700Bold.ttf',
  Roboto800: '@expo-google-fonts/roboto/Roboto_900Black.ttf', // Fallback
  Roboto900: '@expo-google-fonts/roboto/Roboto_900Black.ttf',
  // - Icon Fonts -
  AntDesign: '@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/AntDesign.ttf',
}

/** --- fontRegistry --------------------------------------------------------------------------- */
/** -i- Register any font for mobile preloading */
export const fontRegistry = {
  // - Google Fonts -
  Roboto: require(fontPaths.Roboto400),
  RobotoLight: require(fontPaths.Roboto300),
  RobotoRegular: require(fontPaths.Roboto400),
  RobotoBold: require(fontPaths.Roboto700),
  RobotoBlack: require(fontPaths.Roboto900),
  // - Icon Fonts -
  AntDesign: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/AntDesign.ttf'),
}
