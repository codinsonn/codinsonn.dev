import React from 'react'
// Navigation
import { AetherPage } from 'aetherspace/navigation'
// Screens
import * as UpdateResumeScreen from '../../../../screens/UpdateResumeScreen'

/* --- Config ---------------------------------------------------------------------------------- */

const ScreenComponent = UpdateResumeScreen.UpdateResumeScreen
const screenConfig = UpdateResumeScreen.screenConfig

/* --- /cv/[slug]/edit ------------------------------------------------------------------------- */

const PageScreen = (props: UpdateResumeScreen.UpdateResumeScreenProps) => (
  <AetherPage {...props} screen={ScreenComponent} screenConfig={screenConfig} />
)

/* --- Exports --------------------------------------------------------------------------------- */

export const dynamic = screenConfig.dynamic

export default PageScreen
