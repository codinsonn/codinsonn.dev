import React from 'react'
import { AetherPage } from 'aetherspace/navigation'
import * as UserInfoScreen from '../../screens/UserInfoScreen'

/* --- Config ---------------------------------------------------------------------------------- */

const ScreenComponent = UserInfoScreen.UserInfoScreen
const screenConfig = UserInfoScreen.screenConfig

/* --- /me ------------------------------------------------------------------------------------- */

const PageScreen = (props: UserInfoScreen.UserInfoScreenProps) => (
  <AetherPage {...props} screen={ScreenComponent} screenConfig={screenConfig} />
)

/* --- Exports --------------------------------------------------------------------------------- */

export const dynamic = screenConfig.dynamic

export default PageScreen
