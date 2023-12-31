import React from 'react'
import { AetherPage } from 'aetherspace/navigation'
import * as signUpScreen from '../../screens/SignUpScreen'

/* --- Config ---------------------------------------------------------------------------------- */

const ScreenComponent = signUpScreen.SignUpScreen
const screenConfig = signUpScreen.screenConfig

/* --- /sign-up ------------------------------------------------------------------------------ */

const PageScreen = (props: signUpScreen.SignUpScreenProps) => (
  <AetherPage
    {...props}
    screen={ScreenComponent} // @ts-ignore
    screenConfig={screenConfig}
    skipFetching
  />
)

/* --- Exports --------------------------------------------------------------------------------- */

export const dynamic = signUpScreen.screenConfig.dynamic

export default PageScreen
