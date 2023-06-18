import React from 'react'
// Navigation
import { useAetherRoute, fetchAetherProps } from 'aetherspace/navigation'
// Schemas
import { z, aetherSchema, AetherParams, AetherProps } from 'aetherspace/schemas'
// Components
import { View } from 'aetherspace/primitives'
// SEO
import { H1 } from 'aetherspace/html-elements'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  echo: 'Dummy echo param to test the route with. Returned as prop if present in the route params.',
}

/* --- Schemas & Types ------------------------------------------------------------------------- */

// -i- TODO: Change these schemas to match your route's parameter needs
const ResumeScreenParams = aetherSchema('ResumeScreenParams', {
  echo: z.string().default('Hello World').describe(d.echo), // dummy echo param to test the route with
})

// -i- TODO: Change these schemas to match your screen's prop needs
const ResumeScreenProps = aetherSchema('ResumeScreenProps', {
  echo: z.string().default('Hello World').describe(d.echo), // dummy title prop to test the route with
})

export type TResumeScreenParams = AetherParams<typeof ResumeScreenParams>
export type TResumeScreenProps = AetherProps<typeof ResumeScreenProps>

/* --- GraphQL & Data Fetching ----------------------------------------------------------------- */

// -i- Figure out which data you need at /api/graphql and replace this dummy data in the query below
const ResumeScreenDataQuery = `
  query($healthCheckArgs: HealthCheckArgs!) {
    healthCheck(args: $healthCheckArgs) {
      alive
      kicking
      echo
      baseURL
    }
  }
`

const getResumeScreenArgs = (params: TResumeScreenParams = {}) => ({
  healthCheckArgs: ResumeScreenParams.parse(params), // example
})

const getResumeScreenProps = async (queryKey: string, queryVariables?: TResumeScreenParams) => {
  const queryData = queryKey || ResumeScreenDataQuery
  const queryInput = queryVariables || getResumeScreenArgs() // example, uses defaults if not defined
  const { data } = await fetchAetherProps(queryData, queryInput)
  return { echo: data?.healthCheck.echo } as TResumeScreenProps // example
}

export const ResumeScreenRouteDataConfig = {
  query: ResumeScreenDataQuery,
  getGraphqlVars: getResumeScreenArgs,
  getGraphqlData: getResumeScreenProps,
  paramSchema: ResumeScreenParams,
  propSchema: ResumeScreenProps,
  // backgroundColor: '#FFF',
}

/* --- Route Segments -------------------------------------------------------------------------- */

// -i- https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
export const dynamic = 'auto' // 'auto' | 'force-dynamic' | 'error' | 'force-static'

/* --- <ResumeScreen/> ------------------------------------------------------------------------- */

export const ResumeScreen = (props: TResumeScreenProps) => {
  // Props & Data
  const [screenData, { error }] = useAetherRoute(props, ResumeScreenRouteDataConfig)
  const { echo } = screenData

  // -- Guards --

  if (error) {
    return (
      <View tw="w-full h-full items-center justify-center">
        <H1 tw="text-red-500">Error: {error.message}</H1>
      </View>
    )
  }

  // -- Render --

  return (
    <View tw="w-full h-full items-center justify-center">
      <H1 tw="text-xl text-black">{echo}</H1>
    </View>
  )
}

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = ResumeScreenProps.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default ResumeScreen
