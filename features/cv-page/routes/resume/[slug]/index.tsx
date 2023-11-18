import React from 'react'
// Navigation
import { AetherPage } from 'aetherspace/navigation'
// Screens
import * as ResumeScreen from '../../../screens/ResumeScreen'

/* --- Config ---------------------------------------------------------------------------------- */

const ScreenComponent = ResumeScreen.ResumeScreen
const screenConfig = ResumeScreen.screenConfig

/* --- /cv/[slug] ------------------------------------------------------------------------------ */

const PageScreen = (props: ResumeScreen.TResumeScreenProps) => (
  <AetherPage {...props} screen={ScreenComponent} screenConfig={screenConfig} />
)

type PageScreenGetVars = React.ComponentProps<typeof AetherPage>['screenConfig']['getGraphqlVars']
type ResumeScreenGetVars = (typeof screenConfig)['getGraphqlVars']

/* --- Exports --------------------------------------------------------------------------------- */

export const dynamic = ResumeScreen.dynamic

export default PageScreen
