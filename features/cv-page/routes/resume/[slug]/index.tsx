import React from 'react'
import { AetherPage } from 'aetherspace/navigation'
import * as ResumeScreen from '../../../screens/ResumeScreen'

/* --- Config ---------------------------------------------------------------------------------- */

const ScreenComponent = ResumeScreen.ResumeScreen
const screenConfig = ResumeScreen.screenConfig

/* --- /cv/[slug] ------------------------------------------------------------------------------ */

const PageScreen = (props: ResumeScreen.ResumeScreenProps) => (
  <AetherPage {...props} screen={ScreenComponent} screenConfig={screenConfig} />
)

/* --- Exports --------------------------------------------------------------------------------- */

export const dynamic = screenConfig.dynamic

export default PageScreen
