import React from 'react'
// Navigation
import { AetherPage } from 'aetherspace/navigation'
// Screens
import * as ResumeScreen from '../../screens/ResumeScreen'

/* --- Config ---------------------------------------------------------------------------------- */

const ScreenComponent = ResumeScreen.ResumeScreen
const screenConfig = ResumeScreen.ResumeScreenRouteDataConfig

/* --- /cv ------------------------------------------------------------------------------------- */

const PageScreen = (props: ResumeScreen.TResumeScreenProps) => (
  <AetherPage {...props} screen={ScreenComponent} screenConfig={screenConfig} />
)

/* --- Exports --------------------------------------------------------------------------------- */

export const dynamic = ResumeScreen.dynamic

export default PageScreen
