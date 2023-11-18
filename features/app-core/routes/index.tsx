import React from 'react'
import { AetherPage } from 'aetherspace/navigation'
// Screens
import * as bioScreen from 'links-page/screens/BioScreen'

/* --- / --------------------------------------------------------------------------------------- */

const PageScreen = (
  props: bioScreen.BioScreenProps & { searchParams: Record<string, unknown> }
) => {
  return (
    <AetherPage
      {...props}
      params={{ slug: 'codinsonn' }}
      screen={bioScreen.BioScreen}
      screenConfig={bioScreen.screenConfig}
    />
  )
}

/* --- Exports --------------------------------------------------------------------------------- */

export const dynamic = bioScreen.dynamic

export default PageScreen
