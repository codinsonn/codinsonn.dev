import { z, AetherParams, AetherProps } from './aetherSchemas'
import { fetchAetherProps } from '../navigation/fetchAetherProps'
import type { HintedKeys } from '../types/typeHelpers'
import { isEmpty } from '../utils/commonUtils'

/** --- createDataBridge() --------------------------------------------------------------------- */
/** -i- Create a reusable bridge object between a resolver and a page */
export const createDataBridge = <
  RN extends string,
  SA extends z.ZodRawShape,
  SR extends z.ZodRawShape,
  SU extends z.ZodRawShape = SA,
  SP extends z.ZodRawShape = SR,
  AT extends AetherParams<z.ZodObject<SA>> = AetherParams<z.ZodObject<SA>>,
  RT extends AetherProps<z.ZodObject<SR>> = AetherProps<z.ZodObject<SR>>,
  UT extends AetherParams<z.ZodObject<SU>> = AetherParams<z.ZodObject<SU>>,
  PT extends AetherProps<z.ZodObject<SP>> = AetherProps<z.ZodObject<SP>>,
  RAN extends `${RN}Args` | HintedKeys = `${RN}Args`,
>({
  resolverName,
  resolverArgsName = `${resolverName}Args`,
  argsSchema,
  responseSchema,
  paramsSchema = argsSchema as unknown as z.ZodObject<SU>,
  propsSchema = responseSchema as unknown as z.ZodObject<SP>,
  paramsToArgs,
  responseToProps,
  apiPath,
  allowedMethods,
  graphqlQuery,
  refetchOnMount,
  backgroundColor,
}: {
  resolverName: RN
  resolverArgsName?: RAN | HintedKeys
  argsSchema: z.ZodObject<SA>
  responseSchema: z.ZodObject<SR>
  paramsSchema?: z.ZodObject<SU>
  propsSchema?: z.ZodObject<SP>
  paramsToArgs?: (navParams: any) => AT
  responseToProps?: (response: RT) => PT
  apiPath?: string
  allowedMethods?: ('GET' | 'POST' | 'PUT' | 'DELETE')[]
  graphqlQuery: string
  refetchOnMount?: boolean
  backgroundColor?: string
}) => {
  // Vars & Flags
  const isMutation = graphqlQuery.includes('mutation')

  // -- Error Checks --

  if (!resolverName) throw new Error('Missing resolverName in createDataBridge() call')
  if (!graphqlQuery) throw new Error('Missing graphqlQuery in createDataBridge() call')

  if (!graphqlQuery.includes(resolverName)) {
    throw new Error(`Expected graphqlQuery to include the resolverName "${resolverName}" in createDataBridge() call`) // prettier-ignore
  } else if (!graphqlQuery.includes(resolverArgsName)) {
    throw new Error(`Expected graphqlQuery to include "${resolverArgsName}" in createDataBridge() call`) // prettier-ignore
  }

  // -- Params to Args --

  const defaultParamsToArgs = (navParams: UT) => {
    return argsSchema.applyDefaults(paramsSchema.applyDefaults(navParams))
  }
  const paramsToArgsFn = paramsToArgs || defaultParamsToArgs

  const getGraphqlVars = (navParams: UT) => {
    const args = paramsToArgsFn(navParams)
    return { [resolverArgsName]: args } as Record<RAN | HintedKeys, AT>
  }

  // -- Graphql call to Props --

  const defaultResponseToProps = (response: RT) => response
  const responseToPropsFn = (responseToProps || defaultResponseToProps) as (response: RT) => PT

  const getGraphqlData = async (queryKey: string, queryVariables?: AT) => {
    const queryData = queryKey || graphqlQuery
    const finalVariables = isEmpty(queryVariables) ? null : queryVariables
    const queryInput = finalVariables || getGraphqlVars({} as UT)
    const result = await fetchAetherProps(queryData, queryInput)
    const data = result.data
    return responseToPropsFn(data[resolverName] as RT)
  }

  // -- Return Data Bridge --

  return {
    resolverName,
    resolverArgsName,
    paramsSchema,
    argsSchema,
    responseSchema,
    propsSchema,
    paramsToArgs: paramsToArgsFn,
    getGraphqlVars,
    getGraphqlData,
    responseToProps: responseToPropsFn,
    apiPath,
    allowedMethods,
    graphqlQuery,
    isMutation,
    refetchOnMount,
    backgroundColor,
    PARAMS: null as unknown as UT,
    ARGS: null as unknown as AT,
    RES: null as unknown as RT,
    PROPS: null as unknown as PT,
  }
}
