'use client'
import { SWRConfig } from 'swr'

/* --- Helpers --------------------------------------------------------------------------------- */

// const getSSRData = () => {
//   const $ssrData = document.getElementById('ssr-data')
//   const ssrDataText = $ssrData?.getAttribute('data-ssr')
//   const ssrData = ssrDataText ? (JSON.parse(ssrDataText) as Record<string, any>) : null
//   return ssrData
// }

/* --- <AetherPage/> --------------------------------------------------------------------------- */

export const AetherClientPage = (props: any) => {
  // Props
  const { fallbackKey, screen, ...ssrData } = props
  const PageScreen = screen

  // Render
  return (
    <SWRConfig value={{ fallback: { [fallbackKey]: ssrData } }}>
      {!!ssrData && <div id="ssr-data" data-ssr={JSON.stringify(ssrData)} />}
      <PageScreen {...ssrData} />
    </SWRConfig>
  )
}

// export const AetherPage = <SC extends AetherScreenConfig>(props: AetherPageProps<SC>) => {
//   // Props
//   const { params: routeParams, searchParams, screen, screenConfig, ...restProps } = props
//   const { query, getGraphqlVars, getGraphqlData } = screenConfig

//   // State
//   const [hydratedData, setHydratedData] = useState<Record<string, any> | null>(null)

//   // Screen
//   const PageScreen = screen

//   // Vars
//   const variables = getGraphqlVars({ ...searchParams, ...routeParams })
//   const fallbackKey = unstable_serialize([query, variables])
//   const isServer = typeof window === 'undefined'

//   // -- Effects --

//   useEffect(() => {
//     const ssrData = getSSRData()
//     if (ssrData) setHydratedData(ssrData) // Save the SSR data to state, removing the SSR data from the DOM
//   }, [])

//   // -- Browser --

//   if (!isServer) {
//     const hydrationData = hydratedData || getSSRData()
//     const fallback = hydrationData ? { [fallbackKey]: hydrationData } : {}
//     const renderHydrationData = !!hydrationData && !hydratedData // Only render the hydration data if it's not already in state

//     return (
//       <SWRConfig value={{ fallback }}>
//         {renderHydrationData && <div id="ssr-data" data-ssr={JSON.stringify(hydrationData)} />}
//         <PageScreen {...restProps} {...hydrationData} />
//       </SWRConfig>
//     )
//   }

//   // -- Server --

//   const ssrData = use(getGraphqlData(query, variables))

//   return (
//     <SWRConfig value={{ fallback: { [fallbackKey]: ssrData } }}>
//       {!!ssrData && <div id="ssr-data" data-ssr={JSON.stringify(ssrData)} />}
//       <PageScreen {...restProps} {...ssrData} />
//     </SWRConfig>
//   )
// }
