import React from 'react'
import { AetherPage } from 'aetherspace/navigation'
import * as bioScreen from 'links-page/screens/BioScreen'
import { userBioMock } from 'links-page/mocks/userBio.mock'

/* --- / --------------------------------------------------------------------------------------- */

const PageScreen = (props: bioScreen.BioScreenProps) => (
  <AetherPage
    {...props}
    {...userBioMock}
    params={{ slug: 'codinsonn' }}
    screen={bioScreen.BioScreen}
    screenConfig={bioScreen.screenConfig}
  />
)

/* --- Exports --------------------------------------------------------------------------------- */

export const dynamic = bioScreen.screenConfig.dynamic

export default PageScreen
