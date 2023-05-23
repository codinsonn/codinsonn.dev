import React from 'react'
import { AetherPage } from 'aetherspace/navigation'
import * as bioScreen from '../../screens/BioScreen'

/* --- /links ---------------------------------------------------------------------------------- */

const PageScreen = (props: bioScreen.BioScreenProps) => (
  <AetherPage {...props} screen={bioScreen.BioScreen} screenConfig={bioScreen.screenConfig} />
)

/* --- Exports --------------------------------------------------------------------------------- */

export const dynamic = bioScreen.dynamic

export default PageScreen