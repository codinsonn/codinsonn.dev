import React from 'react'
import { AetherPage } from 'aetherspace/navigation'
import * as SignInScreen from '../../screens/SignInScreen'

/* --- Config ---------------------------------------------------------------------------------- */

const ScreenComponent = SignInScreen.SignInScreen
const screenConfig = SignInScreen.screenConfig

/* --- /sign-in -------------------------------------------------------------------------------- */

const PageScreen = (props: SignInScreen.SignInScreenProps) => (
  <AetherPage {...props} screen={ScreenComponent} screenConfig={screenConfig} skipFetching />
)

/* --- Exports --------------------------------------------------------------------------------- */

export const dynamic = SignInScreen.screenConfig.dynamic

export default PageScreen
