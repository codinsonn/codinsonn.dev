import { use } from 'react'
import { SWRConfig, unstable_serialize } from 'swr'

/* --- Types ----------------------------------------------------------------------------------- */

type AetherPageProps = {
  PageScreen: React.FC<Record<string, any>>
  fetcher: (fetchKey?: string, fetchParams?: unknown) => Promise<Record<string, any>>
  fetchKey: string | [string, unknown]
}

/* --- <AetherPage/> --------------------------------------------------------------------------- */

export const AetherPage = (props: AetherPageProps) => {
  // Props
  const { PageScreen, fetcher, fetchKey, ...restProps } = props
  const isServer = typeof window === 'undefined'

  const fetchKeyString = typeof fetchKey === 'string' ? fetchKey : fetchKey[0]
  const fetchKeyParams = typeof fetchKey === 'string' ? undefined : fetchKey[1]
  const fallbackKey = unstable_serialize([fetchKeyString, fetchKeyParams].filter(Boolean))

  // -- Browser --

  if (!isServer) {
    const $ssrData = document.getElementById('ssr-data')
    const ssrDataText = $ssrData?.getAttribute('data-ssr')
    const data = ssrDataText ? JSON.parse(ssrDataText) : null
    const fallback = data ? { [fallbackKey]: data } : {}

    return (
      <SWRConfig value={{ fallback }}>
        {!!data && <div id="ssr-data" data-ssr={ssrDataText} />}
        <PageScreen {...restProps} {...data} />
      </SWRConfig>
    )
  }

  // -- Server --

  const data = use(fetcher(fetchKeyString, fetchKeyParams))

  return (
    <SWRConfig value={{ fallback: { [fallbackKey]: data } }}>
      {!!data && <div id="ssr-data" data-ssr={JSON.stringify(data)} />}
      <PageScreen {...restProps} {...data} />
    </SWRConfig>
  )
}
