import React from 'react'
import { AetherPage } from 'aetherspace/navigation'
// Screens
import * as bioScreen from '../screens/BioScreen'

/* --- / --------------------------------------------------------------------------------------- */

const PageScreen = (
  props: bioScreen.BioScreenProps & { searchParams: Record<string, unknown> }
) => {
  return (
    <AetherPage {...props} screen={bioScreen.BioScreen} screenConfig={bioScreen.screenConfig} />
  )
}

/* --- Exports --------------------------------------------------------------------------------- */

export const dynamic = bioScreen.dynamic

export default PageScreen
