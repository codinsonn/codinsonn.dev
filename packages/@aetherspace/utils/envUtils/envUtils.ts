import Constants from 'expo-constants'
const __PUBLIC_ENV = '__PUBLIC_ENV' as const

/** --- getDebuggerURL() ----------------------------------------------------------------------- */
/** -i- Get the IP based URL with specified port where the Expo command is running from if local */
export const getDebuggerURL = (port?: number) => {
  const expoDebuggerHost = Constants?.manifest?.debuggerHost || Constants.manifest2?.extra?.expoGo?.debuggerHost // prettier-ignore
  const localURI = expoDebuggerHost?.split?.(':').shift()
  if (!localURI) return null
  return `http://${[localURI, port].join(':')}`
}

/** --- setGlobal() ---------------------------------------------------------------------------- */
/** -i- Set a global variable on the 'globalThis' object */
const setGlobal = (key: any, val: any) => {
  globalThis[key] = val
}

/** --- getGlobal() ---------------------------------------------------------------------------- */
/** -i- Get a global variable from the 'globalThis' object */
const getGlobal = (key: any) => globalThis[key]

/** --- setPublicEnvVars() --------------------------------------------------------------------- */
/*** -i- Set a series of global public env vars to enable retrieving them via getEnvVar() later
 **  -i- You may want to do this in any _app.tsx / _app.js files due to @expo/next-adapter clearing process.env */
export const setPublicEnvVars = (publicEnvVars: { [key: string]: any }) => {
  setGlobal(__PUBLIC_ENV, { ...getGlobal(__PUBLIC_ENV), ...publicEnvVars })
}

/** --- getEnvVar() ---------------------------------------------------------------------------- */
/** -i- Get expo / next / public env var */
export const getEnvVar = (key: string) => {
  const possibleKeys = [
    // Private env var, as exact matches only happen in node server envs
    key,
    // Public env var, needs prefix to hook into front-end next / expo env var system
    `NEXT_PUBLIC_${key}`,
    `EXPO_PUBLIC_${key}`,
    `EXPO_${key}`,
    `REACT_NATIVE_${key}`,
  ]
  const expoEnv = Constants.expoConfig?.extra?.env || Constants.manifest2?.extra?.expoClient?.extra?.env // prettier-ignore
  const checkEnv = (k) => process.env[k] || expoEnv?.[k] || getGlobal(__PUBLIC_ENV)?.[k]
  return possibleKeys.map(checkEnv).find((envVar) => typeof envVar !== 'undefined')
}

/** --- getEnvList() --------------------------------------------------------------------------- */
/** -i- Get an env var, split on '|' and return as an array */
export const getEnvList = (key: string) => {
  const envList = getEnvVar(key)?.split?.('|') || []
  return envList as string[]
}

/** --- getAppLinks() -------------------------------------------------------------------------- */
/** -i- Get all hosted web domains linked to this project from the APP_LINKS env var */
export const getAppLinks = () => {
  const APP_LINKS = getEnvList('APP_LINKS')
  return APP_LINKS.filter((link) => link.includes('https://'))
}

/** --- getWebDomain() ------------------------------------------------------------------------- */
/** -i- Get the hosted web domain from the APP_LINKS env var */
export const getWebDomain = () => {
  const [WEBDOMAIN] = getAppLinks()
  return WEBDOMAIN
}

/** --- getBaseURL() --------------------------------------------------------------------------- */
/** -i- Get the base URL of the local (dev) or hosted (prod) back-end by checking manifest & env vars */
export const getBaseURL = () => {
  const WEBDOMAIN = getWebDomain()
  const BACKEND_URL: string = getEnvVar('BACKEND_URL') || ''
  const BASE_URL: string = getDebuggerURL(3000) || BACKEND_URL || WEBDOMAIN || ''
  return BASE_URL
}
