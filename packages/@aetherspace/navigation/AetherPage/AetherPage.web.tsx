import { use } from 'react'
import { SWRConfig } from 'swr'

/* --- Types ----------------------------------------------------------------------------------- */

type AetherPageProps = {
  PageScreen: React.FC<Record<string, any>>
  fetcher: (fetchKey?: string) => Promise<Record<string, any>>
  fetchKey: string
}

/* --- <AetherPage/> --------------------------------------------------------------------------- */

export const AetherPage = (props: AetherPageProps) => {
  // Props
  const { PageScreen, fetcher, fetchKey } = props
  const isServer = typeof window === 'undefined'

  // -- Browser --

  if (!isServer) return <PageScreen />

  // -- Server --

  const data = use(fetcher(fetchKey))

  return (
    <SWRConfig value={{ fallback: { [fetchKey]: data } }}>
      <PageScreen />
    </SWRConfig>
  )
}
