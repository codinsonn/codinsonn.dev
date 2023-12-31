import React from 'react'
import { Text, View } from 'aetherspace/primitives'
import { z, AetherProps, aetherSchema } from 'aetherspace/schemas'

/* --- Schemas & Types ------------------------------------------------------------------------- */

// -i- TODO: Change this schemas to match your screen's props
const SignInScreenProps = aetherSchema('SignInScreenProps', {
  /* Add props here, e.g.: */
  /* params: SomeScreenParams.optional(), */
  greeting: z.string().optional().default('Hello SignInScreen 👋'),
})

/* --- Screen Config --------------------------------------------------------------------------- */

export const screenConfig = {
  dynamic: 'force-static' as const,
  // backgroundColor: '#your-primary-bg-color',
}

export type SignInScreenProps = AetherProps<typeof SignInScreenProps>

/* --- <SignInScreen/> ------------------------------------------------------------------------- */

export const SignInScreen = (props: SignInScreenProps) => {
  // Props
  const { greeting } = SignInScreenProps.applyDefaults(props)

  // -- Render --

  return (
    <View tw="w-full h-full min-h-full min-w-full items-center justify-center">
      <Text tw="mb-4">{greeting}</Text>
    </View>
  )
}

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = SignInScreenProps.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default SignInScreen
