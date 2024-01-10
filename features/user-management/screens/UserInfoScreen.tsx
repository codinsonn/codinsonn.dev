import React from 'react'
import { useAetherRouteData } from 'aetherspace/navigation'
import { z, AetherProps, createDataBridge } from 'aetherspace/schemas'
import { GetRequestContextDataBridge } from '../schemas/GetRequestContextDataBridge'
import { View } from 'aetherspace/primitives'
import { H1, P } from 'aetherspace/html-elements'
import { useAuth } from '@aetherspace/clerk-auth/hooks'
import { SignOutButton } from '@aetherspace/clerk-auth/components'
import { Button } from 'aetherspace/forms'

/* --- Schemas & Types ------------------------------------------------------------------------- */

const UserInfoScreenParams = GetRequestContextDataBridge.argsSchema
const UserInfoScreenResponse = GetRequestContextDataBridge.responseSchema

const UserInfoScreenProps = UserInfoScreenResponse.extendSchema('UserInfoScreenProps', {
  params: UserInfoScreenParams.optional(),
  segment: z.string().optional(),
})

export type UserInfoScreenProps = AetherProps<typeof UserInfoScreenProps>

/* --- Data Fetching Bridge -------------------------------------------------------------------- */

export const screenConfig = createDataBridge({
  ...GetRequestContextDataBridge,
  paramsSchema: UserInfoScreenParams,
  propsSchema: UserInfoScreenProps,
  refetchOnMount: true,
  backgroundColor: '#111827',
  dynamic: 'auto', // -i- https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
})

/* --- <UserInfoScreen/> ----------------------------------------------------------------------- */

export const UserInfoScreen = (props: UserInfoScreenProps) => {
  // Data
  const [screenData, { error, isLoading }] = useAetherRouteData(props, screenConfig)
  const { auth, user } = screenData || {}

  // Hooks
  const { isLoaded, isSignedIn } = useAuth()

  // Vars
  const hasUserData = !!auth && !!user
  const fullName = hasUserData ? [user.firstName, user.lastName].filter(Boolean).join(' ') : ''

  // -- Guards --

  if (error) {
    return (
      <View tw="w-full h-full min-h-full min-w-full items-center justify-center bg-primary">
        <H1 tw="text-red-500">Error: {error.message}</H1>
      </View>
    )
  }

  if (!isLoaded || isLoading) {
    return (
      <View tw="w-full h-full min-h-full min-w-full items-center justify-center bg-primary">
        <H1 tw="text-xl text-primary">Loading user data...</H1>
      </View>
    )
  }

  if (!hasUserData) {
    return (
      <View tw="w-full h-full min-h-full min-w-full items-center justify-center bg-primary">
        <H1 tw="text-xl text-primary">No user data found.</H1>
        <View tw="h-4" />
        <View tw="flex flex-row">
          <Button link="/sign-in" pressableClasses="bg-blue-500 rounded-md">
            Sign In
          </Button>
          <View tw="w-4" />
          <Button link="/sign-up">Sign Up</Button>
        </View>
      </View>
    )
  }

  // -- Render --

  return (
    <View tw="w-full h-full min-h-full min-w-full items-center justify-center bg-primary">
      <View tw="h-12" />
      <H1 tw="text-xl text-primary">{`Hello ${fullName}`}</H1>
      <View tw="h-4" />
      <View tw="flex-col w-full px-4 max-w-[600px] flex-wrap items-center">
        <P tw="text-primary max-w-full">{JSON.stringify(user, null, 4)}</P>
        <View tw="h-4" />
        {isSignedIn && <SignOutButton redirectUrl="/">Sign Out</SignOutButton>}
      </View>
      <View tw="h-12" />
    </View>
  )
}

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = UserInfoScreenProps.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default UserInfoScreen
