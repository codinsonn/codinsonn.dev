import React from 'react'
import { Text, View } from 'aetherspace/primitives'
import { AetherProps, aetherSchema } from 'aetherspace/schemas'
import { useSignIn, useSession } from '@aetherspace/clerk-auth/hooks'
import { Button, TextInput } from 'aetherspace/forms'
import useUserSignInFormState from '../hooks/useUserSignInFormState'
import { useAetherNav } from 'aetherspace/navigation'

/* --- Schemas & Types ------------------------------------------------------------------------- */

// -i- TODO: Change this schemas to match your screen's props
const SignInScreenProps = aetherSchema('SignInScreenProps', {})

/* --- Screen Config --------------------------------------------------------------------------- */

export const screenConfig = {
  dynamic: 'force-static' as const,
  backgroundColor: '#111827',
}

export type SignInScreenProps = AetherProps<typeof SignInScreenProps>

/* --- <SignInScreen/> ------------------------------------------------------------------------- */

export const SignInScreen = (props: SignInScreenProps) => {
  // Hooks
  const { isLoaded, setActive, signIn } = useSignIn()
  const { isSignedIn, session } = useSession()
  const { openLink } = useAetherNav()

  // Forms
  const formState = useUserSignInFormState({})

  // -- Handlers --

  const handleSignInPressed = async () => {
    // Ignore if not loaded
    if (!isLoaded) return

    console.log('handleSignInPressed()', { formState, isSignedIn })

    try {
      // Remove the previous session if there is one
      if (isSignedIn) await session.end()

      // Sign in
      const completedSignIn = await signIn.create({
        identifier: formState.values.email,
        password: formState.values.password,
      })

      // Indicate that thee user is signed in
      await setActive({ session: completedSignIn.createdSessionId })

      // Navigate to home
      openLink('/')
    } catch (error) {
      console.error(JSON.stringify(error, null, 4))
    }
  }

  // -- Render --

  // TODO: Add social (OAuth) sign in buttons?
  // -i- https://clerk.com/docs/authentication/social-connections/oauth#social-connections-o-auth

  return (
    <View tw="w-full h-full min-h-full min-w-full items-center justify-center bg-primary">
      <View tw="h-12" />
      <Text tw="heading-1 text-primary">Sign In</Text>
      <View tw="flex flex-col w-full max-w-[380px] px-6">
        <View tw="mt-4">
          <Text tw="body-md-regular mb-2 text-primary">Email</Text>
          <TextInput {...formState.getTextInputProps('email')} />
        </View>
        <View tw="mt-4">
          <Text tw="body-md-regular mb-2 text-primary">Password</Text>
          <TextInput
            {...formState.getTextInputProps('password')}
            textContentType="password"
            secureTextEntry
          />
        </View>
        <Button pressableClasses="px-4 mt-4 bg-blue-500 rounded-md" onPress={handleSignInPressed}>
          <Text tw="text-white">Sign In</Text>
        </Button>
      </View>
      <View tw="h-12" />
    </View>
  )
}

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = SignInScreenProps.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default SignInScreen
