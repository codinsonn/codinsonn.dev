/* --- Types ----------------------------------------------------------------------------------- */

export type AetherScreenConfig = {
  graphqlQuery: string
  getGraphqlVars: (navParams: any) => any
  getGraphqlData: (queryKey: string, queryVariables?: any) => Promise<any>
  paramsSchema: unknown
  propsSchema: unknown
  refetchOnMount?: boolean
  backgroundColor?: string
}

export type AetherPageProps<SC extends AetherScreenConfig> = {
  params?: Record<string, any>
  searchParams?: Record<string, any>
  screen: React.FC<Record<string, any>> | ((props: any) => JSX.Element | null)
  screenConfig: SC
  skipFetching?: boolean
}
