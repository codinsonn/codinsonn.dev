import React from 'react'
import { AetherPage } from 'aetherspace/navigation'
// Screens
import * as bioScreen from 'links-page/screens/BioScreen'

/* --- / --------------------------------------------------------------------------------------- */

const PageScreen = async (
  props: bioScreen.BioScreenProps & { searchParams: Record<string, unknown> }
) => {
  console.log('PageScreen', { props, ...bioScreen.screenConfig })
  return (
    <AetherPage
      {...props}
      screen={bioScreen.BioScreen}
      screenConfig={bioScreen.screenConfig}
      {...bioScreen.screenConfig}
    />
  )
}

/* --- Exports --------------------------------------------------------------------------------- */

export const dynamic = bioScreen.dynamic

export default PageScreen
