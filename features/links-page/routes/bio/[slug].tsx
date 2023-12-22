import React from 'react'
// Navigation
import { AetherPage } from 'aetherspace/navigation'
// Screens
import * as bioScreen from '../../screens/BioScreen'

/* --- /bio/[slug] ----------------------------------------------------------------------------- */

const PageScreen = (props: bioScreen.BioScreenProps) => (
  <AetherPage {...props} screen={bioScreen.BioScreen} screenConfig={bioScreen.screenConfig} />
)

/* --- Exports --------------------------------------------------------------------------------- */

export const dynamic = bioScreen.screenConfig.dynamic

export default PageScreen
