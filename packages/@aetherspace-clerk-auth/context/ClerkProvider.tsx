import React, { useMemo } from 'react'
import { ClerkProvider } from '@clerk/clerk-expo'
import type { ClerkProviderProps } from './ClerkProvider.types'
import { getEnvVar } from 'aetherspace/utils'
import * as SecureStore from 'expo-secure-store'

/* --- Token Storage --------------------------------------------------------------------------- */

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key)
    } catch (err) {
      return null
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value)
    } catch (err) {
      return
    }
  },
}

/** --- <AetherClerkProvider/> ----------------------------------------------------------------- */
/** -i- Universal Provider for integrating clerk with Expo or NextJS */
export const AetherClerkProvider = (props: ClerkProviderProps) => {
  // Memos
  const publishableKey = useMemo(() => {
    const clerkPublishableKey = props.publishableKey || getEnvVar('CLERK_PUBLISHABLE_KEY')
    if (!clerkPublishableKey) console.error('Using <AetherClerkProvider/> without CLERK_PUBLISHABLE_KEY env var. Please set it in your /apps/next-app/.env file and include it in `ClientRootLayout.tsx`') // prettier-ignore
    return clerkPublishableKey
  }, [])
  // Render
  return (
    <>
      {/* @ts-ignore */}
      <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey} {...props} />
    </>
  )
}
