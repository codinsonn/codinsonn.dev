import React from 'react'
// Navigation
import { AetherPage } from 'aetherspace/navigation'
// Screens
import * as ResumeScreen from 'cv-page/screens/ResumeScreen'

/* --- Config ---------------------------------------------------------------------------------- */

const ScreenComponent = ResumeScreen.ResumeScreen
const screenConfig = ResumeScreen.screenConfig

/* --- /cv ------------------------------------------------------------------------------------- */

const PageScreen = (props: ResumeScreen.TResumeScreenProps) => (
  <AetherPage
    {...props}
    params={{ slug: 'codinsonn' }}
    screen={ScreenComponent}
    screenConfig={screenConfig}
  />
)

/* --- Exports --------------------------------------------------------------------------------- */

export const dynamic = ResumeScreen.dynamic

export default PageScreen
