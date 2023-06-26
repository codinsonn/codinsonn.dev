import { Roboto as RobotoGoogleFont } from 'next/font/google'
import localFont from 'next/font/local'

/** --- fontPaths ------------------------------------------------------------------------------ */
/** -i- Register any font paths for web preloading */
// export const fontPaths = {
//   // - Google Fonts -
//   Roboto100: '@expo-google-fonts/roboto/Roboto_100Thin.ttf',
//   Roboto200: '@expo-google-fonts/roboto/Roboto_300Light.ttf', // Fallback
//   Roboto300: '@expo-google-fonts/roboto/Roboto_300Light.ttf',
//   Roboto400: '@expo-google-fonts/roboto/Roboto_400Regular.ttf',
//   Roboto500: '@expo-google-fonts/roboto/Roboto_500Medium.ttf',
//   Roboto600: '@expo-google-fonts/roboto/Roboto_700Bold.ttf', // Fallback
//   Roboto700: '@expo-google-fonts/roboto/Roboto_700Bold.ttf',
//   Roboto800: '@expo-google-fonts/roboto/Roboto_900Black.ttf', // Fallback
//   Roboto900: '@expo-google-fonts/roboto/Roboto_900Black.ttf',
//   // - Icon Fonts -
//   AntDesign: '@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/AntDesign.ttf',
// }

// const Roboto = localFont({ src: '@expo-google-fonts/roboto/Roboto_400Regular.ttf' })
// const RobotoLight = localFont({ src: '@expo-google-fonts/roboto/Roboto_300Light.ttf' })
// const RobotoRegular = localFont({ src: '@expo-google-fonts/roboto/Roboto_400Regular.ttf' })
// const RobotoBold = localFont({ src: '@expo-google-fonts/roboto/Roboto_700Bold.ttf' })
// const RobotoBlack = localFont({ src: '@expo-google-fonts/roboto/Roboto_900Black.ttf' })
// const AntDesign = localFont({
//   src: '@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/AntDesign.ttf',
// })

const Roboto = RobotoGoogleFont({ weight: '400', subsets: ['latin'] })
const RobotoLight = RobotoGoogleFont({ weight: '300', subsets: ['latin'] })
const RobotoRegular = RobotoGoogleFont({ weight: '400', subsets: ['latin'] })
const RobotoBold = RobotoGoogleFont({ weight: '700', subsets: ['latin'] })
const RobotoBlack = RobotoGoogleFont({ weight: '900', subsets: ['latin'] })

const AntDesign = localFont({ src: './AntDesign.ttf' })

/** --- fontRegistry --------------------------------------------------------------------------- */
/** -i- Register any font for mobile preloading */
export const fontRegistry = {
  // - Google Fonts -
  Roboto,
  RobotoLight,
  RobotoRegular,
  RobotoBold,
  RobotoBlack,
  // - Icon Fonts -
  AntDesign,
}
