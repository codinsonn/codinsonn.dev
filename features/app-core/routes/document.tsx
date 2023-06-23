/* eslint-disable @next/next/no-head-element */
import React from 'react'
import { AppRegistry } from 'react-native'
import { useServerInsertedHTML } from 'next/navigation'
// Layouts
import RootLayout from './layout'
// Styles
import { getInjectableMediaQueries } from 'aetherspace/styles'
// Constants
import { getBaseUrl } from 'aetherspace/utils/envUtils'

/* --- Styles ---------------------------------------------------------------------------------- */

export const cssReset = `
/**
 * Building on the RNWeb reset:
 * https://github.com/necolas/react-native-web/blob/master/packages/react-native-web/src/exports/StyleSheet/initialRules.js
 */
html, body, #__next {
  width: 100%;
  /* To smooth any scrolling behavior */
  -webkit-overflow-scrolling: touch;
  margin: 0px;
  padding: 0px;
  /* Allows content to fill the viewport and go beyond the bottom */
  min-height: 100%;
}
#__next {
  flex-shrink: 0;
  flex-basis: auto;
  flex-direction: column;
  flex-grow: 1;
  display: flex;
  flex: 1;
}
html {
  scroll-behavior: smooth;
  /* Prevent text size change on orientation change https://gist.github.com/tfausak/2222823#file-ios-8-web-app-html-L138 */
  -webkit-text-size-adjust: 100%;
  height: 100%;
}
body {
  display: flex;
  /* Allows you to scroll below the viewport; default value is visible */
  overflow-y: auto;
  overscroll-behavior-y: none;
  font-family: -apple-system, system, Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -ms-overflow-style: scrollbar;
  /* -- Custom -- */
  background-color: #111827;
}
`

export const nextReset = `
div[data-nextjs-scroll-focus-boundary] {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
}
`

/* --- <Document> ------------------------------------------------------------------------------ */

const Document = (props: { children: React.ReactNode }) => {
  // Props
  const { children } = props

  // -- Serverside Styles --

  useServerInsertedHTML(() => {
    // Get react-native-web styles
    const Main = () => <RootLayout>{children}</RootLayout>
    AppRegistry.registerComponent('Main', () => Main) // @ts-ignore
    const mainApp = AppRegistry.getApplication('Main')
    const reactNativeStyleElement = mainApp.getStyleElement()
    // Get aetherspace styles
    const aetherQueries = getInjectableMediaQueries()
    // Inject styles
    return (
      <>
        {reactNativeStyleElement}
        <style type="text/css" dangerouslySetInnerHTML={{ __html: aetherQueries.css }} />
      </>
    )
  })

  // -- Render --

  return (
    <html>
      <head>
        <link rel="canonical" href={getBaseUrl()} />
        {/* - Icons - */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#069570" />
        <meta name="msapplication-TileColor" content="#069570" />
        <meta name="theme-color" content="#ffffff" />
        {/* - Title & Keywords - */}
        <title>Thorr Stevens | Full-Product Engineer for Startups and ECommerce</title>
        <meta name="application-name" content="codinsonn.dev" />
        <meta name="author" content="Thorr Stevens" />
        <meta name="creator" content="Thorr Stevens" />
        <meta name="publisher" content="Thorr Stevens" />
        <meta
          name="description"
          content="Thorr Stevens, full-product freelance engineer crafting web and mobile apps in Ghent, Belgium, UK & US for 5+ years. Specialized in React-Native, Expo, Next.js"
        />
        <meta
          name="keywords"
          content="Thorr Stevens,codinsonn,Aetherspace,GREEN Stack,GraphQL,Expo,Next.js,React-Native,TypeScript,Full-Stack Developer,Engineers for Ghent, UK devs, US freelancer"
        />
        <meta name="category" content="software development" />
        {/* - Styling - */}
        <style type="text/css" dangerouslySetInnerHTML={{ __html: cssReset }} />
        <style type="text/css" dangerouslySetInnerHTML={{ __html: nextReset }} />
        {/* - Other - */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </head>
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}

/* --- Exports --------------------------------------------------------------------------------- */

export default Document
