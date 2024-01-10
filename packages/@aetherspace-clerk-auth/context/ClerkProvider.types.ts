import type { ComponentProps } from 'react'
import type { ClerkProviderProps as ExpoClerkProviderProps } from '@clerk/clerk-expo'
import type { ClerkProvider } from '@clerk/nextjs'

type NextClerkProviderProps = ComponentProps<typeof ClerkProvider>

export type ClerkProviderProps = Partial<NextClerkProviderProps & ExpoClerkProviderProps>
