import React, { useMemo } from 'react'
import { ClerkProvider } from '@clerk/clerk-expo'
import type { ClerkProviderProps } from './ClerkProvider.types'
import { getEnvVar } from 'aetherspace/utils'

/** --- <AetherClerkProvider/> ----------------------------------------------------------------- */
/** -i- Universal Provider for integrating clerk with Expo or NextJS */
export const AetherClerkProvider = (props: ClerkProviderProps) => {
  const publishableKey = useMemo(() => {
    const clerkPublishableKey = getEnvVar('CLERK_PUBLISHABLE_KEY')
    if (!clerkPublishableKey) console.error('Using AetherClerkProvider without CLERK_PUBLISHABLE_KEY env var set. Please set it in your /apps/next-app/.env file and include it in `ClientRootLayout.tsx`') // prettier-ignore
    return clerkPublishableKey
  }, []) // @ts-ignore
  return <ClerkProvider publishableKey={publishableKey} {...props} />
}
