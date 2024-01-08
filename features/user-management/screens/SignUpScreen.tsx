import React from 'react'
import { Text, View } from 'aetherspace/primitives'
import { TextInput, Button } from 'aetherspace/forms'
import { AetherProps, aetherSchema } from 'aetherspace/schemas'
import useUserSignupFormState from '../hooks/useUserSignUpFormState'
import { useSignUp, useSession } from '@aetherspace/clerk-auth/hooks'
import { useAetherNav } from 'aetherspace/navigation'

/* --- Schemas & Types ------------------------------------------------------------------------- */

const SignUpScreenProps = aetherSchema('SignUpScreenProps', {})

export type SignUpScreenProps = AetherProps<typeof SignUpScreenProps>

/* --- Screen Config --------------------------------------------------------------------------- */

export const screenConfig = {
  dynamic: 'force-static' as const,
  backgroundColor: '#111827',
}

/* --- <SignUpScreen/> ------------------------------------------------------------------------- */

export const SignUpScreen = (props: SignUpScreenProps) => {
  // Hooks
  const { isLoaded, setActive, signUp } = useSignUp()
  const { isSignedIn, session } = useSession()
  const { openLink } = useAetherNav()

  // Forms
  const formState = useUserSignupFormState({})

  // -- Handlers --

  const handleSignUpPressed = async () => {
    // Ignore if not loaded
    if (!isLoaded) return

    try {
      // Remove the previous session if there is one
      if (isSignedIn) await session.end()

      // Sign up
      await signUp.create({
        firstName: formState.values.firstName,
        lastName: formState.values.lastName,
        emailAddress: formState.values.email,
        password: formState.values.password,
      })

      // Send email
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      // Start pending email verification flow
      formState.handleChange('pendingVerification', true)
    } catch (error) {
      console.error(JSON.stringify(error, null, 4))
    }
  }

  const handleVerifyEmailPressed = async () => {
    // Ignore if not loaded
    if (!isLoaded) return

    try {
      // Verify the email address
      const completedSignUp = await signUp.attemptEmailAddressVerification({
        code: formState.values.verificationCode,
      })

      await setActive({ session: completedSignUp.createdSessionId })
    } catch (error) {
      console.error(JSON.stringify(error, null, 4))
    }

    // Navigate to the home page
    openLink('/me')
  }

  // -- Render --

  // TODO: Add social (OAuth) sign up buttons?
  // -i- https://clerk.com/docs/authentication/social-connections/oauth#social-connections-o-auth

  return (
    <View tw="w-full h-full min-h-full min-w-full items-center justify-center bg-primary">
      <View tw="h-12" />
      <Text tw="heading-1 text-primary">Sign Up</Text>
      {!formState.values.pendingVerification ? (
        <View tw="flex flex-col w-full max-w-[380px] px-6">
          <View tw="mt-4">
            <Text tw="body-md-regular mb-2 text-primary">First Name</Text>
            <TextInput {...formState.getTextInputProps('firstName')} />
          </View>
          <View tw="mt-4">
            <Text tw="body-md-regular mb-2 text-primary">Last Name</Text>
            <TextInput {...formState.getTextInputProps('lastName')} />
          </View>
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
          <Button pressableClasses="px-4 mt-4 bg-blue-500 rounded-md" onPress={handleSignUpPressed}>
            <Text tw="text-white">Sign Up</Text>
          </Button>
        </View>
      ) : (
        <View tw="flex flex-col w-full max-w-[380px] px-6">
          <View tw="mt-4">
            <Text tw="body-md-regular mb-2 text-primary">Verification Code</Text>
            <TextInput {...formState.getTextInputProps('verificationCode')} />
          </View>
          <Button
            pressableClasses="px-4 py-2 mt-4 bg-blue-500 rounded-md"
            onPress={handleVerifyEmailPressed}
          >
            <Text tw="text-white">Verify Email</Text>
          </Button>
        </View>
      )}
      <View tw="h-[200px]" />
    </View>
  )
}

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = SignUpScreenProps.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default SignUpScreen
