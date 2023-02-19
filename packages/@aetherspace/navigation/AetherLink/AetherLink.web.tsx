import React, { useMemo, forwardRef, ComponentProps } from 'react'
import { Platform } from 'react-native'
import { Link as NavigationLink, useRouting } from 'expo-next-react-navigation'
import NextLink from 'next/link'
import * as Linking from 'expo-linking'
import * as WebBrowser from 'expo-web-browser'
// Context
import { useAetherContext } from 'aetherspace/context'
// Primitives
import { AetherView, AetherText } from '../../primitives'
// Utils
import { getAppLinks, getWebDomain } from '../../utils'

/* --- Types ----------------------------------------------------------------------------------- */

interface AetherLinkBaseType extends Partial<ComponentProps<typeof NavigationLink>> {
  style?: ComponentProps<typeof NavigationLink>['style']
  tw?: string | (string | null | undefined | false | 0)[]
  twID?: string
  asText?: boolean
  isText?: boolean
  isBlank?: boolean
  target?: string
  children?: any | any[] // TODO: Fix this
}

interface AetherLinkToType extends AetherLinkBaseType {
  to: string
  href?: never
  routeName?: never
}
interface AetherLinkHrefType extends AetherLinkBaseType {
  href: string
  to?: never
  routeName?: never
}
interface AetherLinkRouteType extends AetherLinkBaseType {
  routeName: string
  to?: never
  href?: never
}

type AetherLinkType = AetherLinkToType | AetherLinkHrefType | AetherLinkRouteType
type any$Todo = any

type ObjectType = Record<string, unknown>
type LinkPropsType<T extends ObjectType> = {
  [key: string]: unknown
  params?: Partial<T>
}

/* --- useAetherNav() -------------------------------------------------------------------------- */

export const useAetherNav = <T extends ObjectType = ObjectType>(props: LinkPropsType<T> = {}) => {
  // Props
  const { params = {} } = props

  // Hooks
  const { navigate, ...expoNextReactNavRoutingResources } = useRouting()

  // Vars
  const APP_LINKS = useMemo(getAppLinks, [])
  const WEB_DOMAIN = useMemo(getWebDomain, [])

  // -- Handlers --

  const getDestination = (path: string) => {
    // Convert to relative path?
    const internalDomainMatch = APP_LINKS.find((appUrl) => path.includes(appUrl))
    if (internalDomainMatch) return path.replace(`${internalDomainMatch}/`, '')
    // Remove leading slash?
    const hasLeadingSlash = path !== '/' && path[0] === '/'
    return hasLeadingSlash ? path.slice(1) : path
  }

  const openLink = (path: string, isBlank = false) => {
    const destination = getDestination(path)
    const isInternalLink = !destination.includes('://') && !destination.includes('api/')
    const isWeb = Platform.OS !== 'web'
    const webDestination = isInternalLink && isWeb ? `${WEB_DOMAIN}${destination}` : path
    const isBrowserEnv = Platform.OS === 'web' && typeof window !== 'undefined' && !!window.open
    const openURL = isBrowserEnv ? (url: string) => window.open(url, '_blank') : Linking.openURL
    if (isInternalLink && !isBlank) return navigate({ routeName: destination })
    if (isBlank || isBrowserEnv) return openURL(webDestination) // "open in a new tab" or mobile browser
    WebBrowser.openBrowserAsync(webDestination) // Open external links in internal browser?
  }

  // -- Return --

  return {
    ...expoNextReactNavRoutingResources,
    params: params as T,
    navigate,
    WEB_DOMAIN,
    APP_LINKS,
    getDestination,
    openLink,
  }
}

/* --- <AetherLink/> --------------------------------------------------------------------------- */

const AetherLink = forwardRef<typeof NavigationLink | typeof Text, AetherLinkType>((props, ref) => {
  // Props
  const { children, href, to, routeName, style, tw, twID, asText, ...restProps } = props
  const bindStyles = { style, tw, twID, ...restProps }

  // Hooks
  const { isAppDir } = useAetherContext()
  const { openLink, getDestination } = useAetherNav()
  const destination = getDestination((href || to || routeName)!)

  // Vars
  const isBlank = props.target === '_blank' || props.isBlank
  const isText = asText || props.isText || typeof children === 'string'
  const isExternal = destination.includes('://') || destination.includes('api/')

  // -- Handler --

  const onLinkPress = () => openLink(destination, isBlank)

  // -- Render as Text --

  if (isText) {
    return (
      <AetherText {...restProps} {...bindStyles} ref={ref as any$Todo} onPress={onLinkPress}>
        {children}
      </AetherText>
    )
  }

  // -- Render as Web link --

  if (isExternal) {
    return (
      <a href={destination} target="_blank" rel="noreferrer">
        <AetherView {...bindStyles}>{children}</AetherView>
      </a>
    )
  }

  // -- Render as View wrapped with Next Link --

  if (isAppDir) {
    return (
      <NextLink href={destination}>
        <AetherView {...bindStyles}>{children}</AetherView>
      </NextLink>
    )
  }

  // -- Render as View wrapped with Navigation --

  return (
    <NavigationLink
      {...restProps}
      routeName={isExternal ? '' : destination}
      ref={ref as any$Todo}
      web={{ as: destination }}
      touchableOpacityProps={{ onPressIn: onLinkPress }}
    >
      <AetherView {...bindStyles}>{children}</AetherView>
    </NavigationLink>
  )
})

AetherLink.displayName = 'AetherLink'

/* --- Exports --------------------------------------------------------------------------------- */

export default AetherLink
