'use client'
import React from 'react'
import ErrorBoundary from '../screens/ErrorBoundary'
import { View } from 'aetherspace/primitives'
import { AetherClerkProvider } from '@aetherspace/clerk-auth/context/ClerkProvider'

/* --- <RootLayout/> --------------------------------------------------------------------------- */

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <ErrorBoundary>
    <AetherClerkProvider>
      <View tw="flex flex-col min-h-full w-full">{children}</View>
    </AetherClerkProvider>
  </ErrorBoundary>
)

/* --- Exports --------------------------------------------------------------------------------- */

export default RootLayout
