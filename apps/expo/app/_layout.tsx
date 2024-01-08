import { useEffect } from 'react'
import { Stack, SplashScreen } from 'expo-router'
import RootLayout from 'app/routes/layout'
import tailwindConfig from 'app/tailwind.config'
import { AetherContextManager } from 'aetherspace/context'
import { useAuth } from '@aetherspace/clerk-auth/hooks'
import * as assets from 'registries/assets.generated'
import useLoadFonts from 'app/hooks/useLoadFonts'
import { setGlobal } from 'aetherspace/utils'

/* --- Config ---------------------------------------------------------------------------------- */

SplashScreen.preventAutoHideAsync()

/* --- <AetherContextWrapper/> ----------------------------------------------------------------- */

const AetherContextWrapper = () => {
  // Auth
  const { getToken } = useAuth()

  // -- Effects --

  useEffect(() => {
    setGlobal('getAuthToken', getToken)
  }, [getToken])

  // -- Render --

  return (
    <AetherContextManager
      assets={assets}
      icons={{}}
      twConfig={tailwindConfig}
      getAuthToken={getToken}
      isAppDir
      isExpo
    >
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#FFFFFF' },
          animation: 'slide_from_right',
        }}
      />
    </AetherContextManager>
  )
}

/* --- <ExpoRootLayout/> ----------------------------------------------------------------------- */

const ExpoRootLayout = () => {
  // Hide app when fonts not yet loaded
  const fontsLoaded = useLoadFonts()

  // -- Effects --

  useEffect(() => {
    // Hide the splash screen after the fonts have loaded and the UI is ready
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  // -- Render --

  return (
    <RootLayout>
      <AetherContextWrapper />
    </RootLayout>
  )
}

/* --- Exports --------------------------------------------------------------------------------- */

export default ExpoRootLayout
