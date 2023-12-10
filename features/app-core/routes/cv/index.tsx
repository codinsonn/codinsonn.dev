import React from 'react'
import { AetherPage } from 'aetherspace/navigation'
import * as ResumeScreen from 'cv-page/screens/ResumeScreen'
import { dummyResumeData } from 'cv-page/mocks/resumeData.mock'

/* --- Config ---------------------------------------------------------------------------------- */

const ScreenComponent = ResumeScreen.ResumeScreen
const screenConfig = ResumeScreen.screenConfig

/* --- /cv ------------------------------------------------------------------------------------- */

const PageScreen = (props: ResumeScreen.TResumeScreenProps) => (
  <AetherPage
    {...props}
    {...dummyResumeData}
    params={{ slug: 'codinsonn' }}
    screen={ScreenComponent}
    screenConfig={screenConfig}
  />
)

/* --- Exports --------------------------------------------------------------------------------- */

export const dynamic = screenConfig.dynamic

export default PageScreen
