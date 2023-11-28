import React from 'react'
import { AetherPage } from 'aetherspace/navigation'
// Screens
import * as bioScreen from 'links-page/screens/BioScreen'

/* --- /links ---------------------------------------------------------------------------------- */

const PageScreen = (props: bioScreen.TBioScreenProps) => (
  <AetherPage
    {...props}
    params={{ slug: 'codinsonn' }}
    screen={bioScreen.BioScreen}
    screenConfig={bioScreen.screenConfig}
  />
)

/* --- Exports --------------------------------------------------------------------------------- */

export const dynamic = bioScreen.screenConfig.dynamic

export default PageScreen
