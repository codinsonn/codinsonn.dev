/* eslint-disable import/no-anonymous-default-export */
import { PlopTypes } from '@turbo/gen'
// Utils
import { getWorkspaceOptions, getAvailableDataBridges } from '../scripts/helpers/scriptUtils'

/* --- Disclaimer ------------------------------------------------------------------------------ */

// Learn more about Turborepo Generators at:
// https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

/* --- Constants ------------------------------------------------------------------------------- */

const workspaceOptions = getWorkspaceOptions('')
const availableDataBridges = getAvailableDataBridges('')

const LINES = 100 - 12 // -i- 100 = max length, 12 = everything but the title & '-' lines

const NoNeedForFetching = "No, this screen doesn't need to fetch data to work"
const NoIllDoItMyself = "No, I'll figure out data bridging myself (editable dummy example)"

/* --- Helpers --------------------------------------------------------------------------------- */

const camelToDash = (str: string) => str.replace(/[\w]([A-Z])/g, (m) => `${m[0]}-${m[1]}`).toLowerCase() // prettier-ignore

const uppercaseFirstChar = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

/** --- Route Generator ------------------------------------------------------------------------ */
/** -i- Route generator to add a new route and related screen */
export const registerAetherRouteGenerator = (plop: PlopTypes.NodePlopAPI) => {
  plop.setGenerator('aether-route', {
    description: 'Route generator to add a new route and related screen',
    prompts: [
      {
        type: 'list',
        name: 'workspaceTarget',
        message: 'Where would you like to add this new route?',
        choices: Object.keys(workspaceOptions),
      },
      {
        type: 'input',
        name: 'screenName',
        message: 'What should the screen component be called? (e.g. "TestScreen" = <TestScreen/> component)', // prettier-ignore
        default: 'SomeScreen',
      },
      {
        type: 'input',
        name: 'routePath',
        message: 'What url do you want this route on? (e.g. "/examples/[slug]")',
        default: (data) => {
          const workspacePath = workspaceOptions[data.workspaceTarget]
          const workspaceName = workspacePath.split('/')[1]
          return `/${workspaceName}/${camelToDash(data.screenName)}`
        },
      },
      {
        type: 'list',
        name: 'fetcherBridge',
        message: 'Would you like to fetch initial data for this route from a resolver?',
        choices: [NoNeedForFetching, NoIllDoItMyself, ...Object.keys(availableDataBridges)],
      },
    ],
    actions: (data) => {
      // Args
      const { workspaceTarget, screenName, fetcherBridge } = data || {}
      const workspacePath = workspaceOptions[workspaceTarget]
      const dataBridgeConfig = availableDataBridges[fetcherBridge]

      // Flags
      const noFetcher = fetcherBridge === NoNeedForFetching
      const isLinkedFetcher = ![NoNeedForFetching, NoIllDoItMyself].includes(fetcherBridge)

      // -- Vars --

      const ScreenName = uppercaseFirstChar(screenName)
      const screenTitleDivider = `/* --- <${ScreenName}/> ${'-'.repeat(LINES - ScreenName.length - 3)} */` // prettier-ignore

      let routePath = data?.routePath
      if (!routePath?.startsWith('/')) routePath = `/${routePath}`
      const screenRoutePath = `${workspacePath}/routes/${routePath}/index.tsx`
      const traversalParts = routePath.split('/').map(() => '..')
      const screenImportPath = `${traversalParts.join('/')}/screens/${ScreenName}`
      const routePathDivider = `/* --- ${routePath} ${'-'.repeat(LINES - routePath.length)} */`

      console.log({ dataBridgeConfig, routePath, noFetcher, isLinkedFetcher })

      // -- All Possible Steps --

      const addSimpleScreen = {
        type: 'add',
        path: `${workspacePath}/screens/${ScreenName}.tsx`,
        templateFile: '../../packages/@aetherspace/generators/templates/route-screen-simple.hbs', // prettier-ignore
        data: {
          screenName,
          ScreenName,
          screenTitleDivider,
        },
      }

      const addDynamicScreen = {
        ...addSimpleScreen,
        templateFile: '../../packages/@aetherspace/generators/templates/route-screen.hbs',
      }

      const addScreenToIndex = {
        type: 'append-last-line',
        path: `${workspacePath}/screens/index.ts`,
        template: `export { ${ScreenName}, T${ScreenName}Props } from './${ScreenName}'\n`,
        pattern: /^(.*\S)[\r\n]*$/,
      }

      const addSimpleRoutePath = {
        type: 'add',
        path: screenRoutePath,
        templateFile: '../../packages/@aetherspace/generators/templates/screen-route-simple.hbs', // prettier-ignore
        data: {
          screenName,
          ScreenName,
          screenImportPath,
          routePath,
          routePathDivider,
        },
      }

      const addDynamicRoutePath = {
        ...addSimpleRoutePath,
        templateFile: '../../packages/@aetherspace/generators/templates/screen-route.hbs',
      }

      const openFilesInVSCode = {
        type: 'open-files-in-vscode',
        paths: [screenRoutePath, `${workspacePath}/screens/${ScreenName}.tsx`],
      }

      const linkRoutes = { type: 'link-routes' }

      // -- Generate without Fetching Setup --

      if (noFetcher) {
        return [
          addSimpleScreen,
          addScreenToIndex,
          addSimpleRoutePath,
          openFilesInVSCode,
          linkRoutes,
        ]
      }

      // -- Generate with Dummy Fetching Setup --

      return [
        addDynamicScreen,
        addScreenToIndex,
        addDynamicRoutePath,
        openFilesInVSCode,
        linkRoutes,
      ]
    },
  })
}
