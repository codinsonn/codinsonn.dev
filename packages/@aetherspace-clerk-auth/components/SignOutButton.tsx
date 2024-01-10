import React from 'react'
import Button, {
  AetherButtonBaseProps,
  AetherButtonProps,
} from 'aetherspace/forms/AetherButton/AetherButton'
import { Text } from 'aetherspace/primitives'
import { z } from 'aetherspace/schemas'
import { useAuth } from '../hooks'
import { useAetherNav } from 'aetherspace/navigation'

/* --- Props ----------------------------------------------------------------------------------- */

const SignOutButtonProps = AetherButtonBaseProps.extendSchema('SignOutButtonProps', {
  redirectUrl: z.string().url().optional(),
})

/* --- Types ----------------------------------------------------------------------------------- */

type SignOutButtonProps = Omit<
  AetherButtonProps & Partial<z.infer<typeof SignOutButtonProps>>,
  'link' | 'onPress'
>

/* --- <SignOutButton/> ------------------------------------------------------------------------ */

const SignOutButton = (props: SignOutButtonProps) => {
  // Props
  const { redirectUrl } = props

  // Hooks
  const { isLoaded, isSignedIn, signOut } = useAuth()
  const { openLink } = useAetherNav()

  // -- Handlers --

  const onSignOutPressed = async () => {
    // Ignore if not loaded
    if (!isLoaded) return

    // Sign out
    await signOut()

    // Navigate to the redirectUrl?
    if (redirectUrl) openLink(redirectUrl)
  }

  // -- Guards --

  if (!isLoaded || !isSignedIn) return null

  // -- Render --

  return (
    <>
      {/* @ts-ignore */}
      <Button
        pressableClasses="px-4 py-2 mt-4 bg-blue-500 rounded-md"
        {...props}
        onPress={onSignOutPressed}
      >
        <Text tw="text-white">Sign Out</Text>
      </Button>
    </>
  )
}

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = SignOutButtonProps.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export { SignOutButton }
