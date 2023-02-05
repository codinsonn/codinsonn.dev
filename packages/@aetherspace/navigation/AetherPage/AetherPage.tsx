/* --- Types ----------------------------------------------------------------------------------- */

type AetherPageProps = {
  PageScreen: React.FC<Record<string, any>>
  fetcher: (fetchKey?: string, fetchParams?: unknown) => Promise<Record<string, any>>
  fetchKey: string | [string, unknown]
}

/* --- <AetherPage/> --------------------------------------------------------------------------- */

export const AetherPage = (props: AetherPageProps) => {
  // Props
  const { PageScreen } = props

  // -- Browser --

  return <PageScreen />
}
