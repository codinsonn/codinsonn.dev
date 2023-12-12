/* eslint-disable import/no-anonymous-default-export */
import { PlopTypes } from '@turbo/gen'
// Utils
import {
  getWorkspaceOptions,
  getAvailableDataBridges,
  camelToDash,
  uppercaseFirstChar,
  validateNonEmptyNoSpaces,
  createAutocompleteSource,
} from '../scripts/helpers/scriptUtils'

/* --- Disclaimer ------------------------------------------------------------------------------ */

// Learn more about Turborepo Generators at:
// https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

/* --- Constants ------------------------------------------------------------------------------- */

const workspaceOptions = getWorkspaceOptions('')
const availableDataBridges = getAvailableDataBridges('')

const LINES = 100 - 12 // -i- 100 = max length, 12 = everything but the title & '-' lines

const NoNeedForFetching = "No, this screen doesn't need to fetch data to work"
const NoIllDoItMyself = "No, I'll figure out data bridging myself (editable dummy example)"

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
        validate: validateNonEmptyNoSpaces,
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
        validate: validateNonEmptyNoSpaces,
      },
      {
        type: 'autocomplete',
        name: 'fetcherBridge',
        message: 'Would you like to fetch initial data for this route from a resolver?', // @ts-ignore
        source: createAutocompleteSource([
          NoNeedForFetching,
          NoIllDoItMyself,
          ...Object.keys(availableDataBridges),
        ]),
      },
    ],
    actions: (data) => {
      // Args
      const { workspaceTarget, screenName, fetcherBridge } = data || {}
      const workspacePath = workspaceOptions[workspaceTarget]
      const dataBridgeConfig = availableDataBridges[fetcherBridge]

      // Flags
      const noFetcher = fetcherBridge === NoNeedForFetching

      // -- Vars --

      const ScreenName = uppercaseFirstChar(screenName)
      const screenTitleDivider = `/* --- <${ScreenName}/> ${'-'.repeat(LINES - ScreenName.length - 3)} */` // prettier-ignore

      let routePath = data?.routePath
      if (!routePath?.startsWith('/')) routePath = `/${routePath}`
      const screenRoutePath = `${workspacePath}/routes/${routePath}/index.tsx`
      const traversalParts = routePath.split('/').map(() => '..')
      const screenImportPath = `${traversalParts.join('/')}/screens/${ScreenName}`
      const routePathDivider = `/* --- ${routePath} ${'-'.repeat(LINES - routePath.length)} */`

      const { bridgePath, workspaceName, workspacePath: bridgeWsPath } = dataBridgeConfig || {}
      const DataBridgeName = dataBridgeConfig?.bridgeName
      let dataBridgeImportPath = bridgePath?.replace('.ts', '')
      const isWorkspaceBridge = bridgeWsPath === workspacePath
      const bridgeImportRoot = isWorkspaceBridge ? '../' : workspaceName
      dataBridgeImportPath = bridgePath?.replace(bridgeWsPath, bridgeImportRoot)

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

      const addLinkedResolverScreen = {
        ...addDynamicScreen,
        templateFile: '../../packages/@aetherspace/generators/templates/route-screen-w-resolver.hbs', // prettier-ignore
        data: {
          ...addDynamicScreen.data,
          DataBridgeName,
          dataBridgeImportPath,
        },
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
          linkRoutes,
          openFilesInVSCode,
        ]
      }

      // -- Generate with Linked Resolver Fetching Setup --

      if (dataBridgeConfig) {
        return [
          addLinkedResolverScreen,
          addScreenToIndex,
          addDynamicRoutePath,
          linkRoutes,
          openFilesInVSCode,
        ]
      }

      // -- Generate with Dummy Fetching Setup --

      return [
        addDynamicScreen,
        addScreenToIndex,
        addDynamicRoutePath,
        linkRoutes,
        openFilesInVSCode,
      ]
    },
  })
}
