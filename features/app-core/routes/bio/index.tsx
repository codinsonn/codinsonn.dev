import React from 'react'
import { AetherPage } from 'aetherspace/navigation'
// Screens
import * as bioScreen from 'links-page/screens/BioScreen'

/* --- /bio ------------------------------------------------------------------------------------ */

const PageScreen = async (props: bioScreen.BioScreenProps) => (
  <AetherPage
    {...props}
    screen={bioScreen.BioScreen}
    screenConfig={bioScreen.screenConfig}
    {...bioScreen.screenConfig}
  />
)

/* --- Exports --------------------------------------------------------------------------------- */

export const dynamic = bioScreen.dynamic

export default PageScreen
