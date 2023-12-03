/* eslint-disable import/no-anonymous-default-export */
import { PlopTypes } from '@turbo/gen'
// Utils
import { parseWorkspaces } from '../scripts/helpers/scriptUtils'

/* --- Disclaimer ------------------------------------------------------------------------------ */

// Learn more about Turborepo Generators at:
// https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

/* --- Constants ------------------------------------------------------------------------------- */

const { workspaceImports } = parseWorkspaces('')
const workspaceOptions = Object.keys(workspaceImports).reduce((options, workspacePath) => {
  const workspaceName = workspaceImports[workspacePath]
  const workspaceOption = `${workspacePath}  --  importable from: '${workspaceName}'`
  // Skip listing the helper workspaces
  if (['config', 'aetherspace', 'registries'].includes(workspaceName)) return options
  // Add the workspace option
  return { ...options, [workspaceOption]: workspacePath }
}, {})

const LINES = 100 - 13 // -i- JSDoc: 100 = max length, 13 = everything but the title & '-' lines

const RESOLVER_GENERATABLES = Object.freeze({
  'GraphQL resolver': 'graphResolver',
  'GET api route': 'GET',
  'POST api route': 'POST',
  'PUT api route': 'PUT',
  // "Typed formState hook (for resolver args)": 'formHook',
  // "Typed fetching function, e.g. fetchResources()": 'fetch',
  // "Typed fetcher hook, e.g. useFetchResources()": 'fetchHook',
})

/* --- Helpers --------------------------------------------------------------------------------- */

const matchMethods = (methods: string[]) => (opt) => methods.includes(opt)

const camelToDash = (str: string) => str.replace(/[\w]([A-Z])/g, (m) => `${m[0]}-${m[1]}`).toLowerCase() // prettier-ignore

const uppercaseFirstChar = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

const includesOption = (strOpts: string[]) => (opt) => strOpts.join('').includes(opt)

/** --- Resolver Generator --------------------------------------------------------------------- */
/** -i- Resolver generator to add a new data resolver and related schemas, API routes and fetching logic */
export const registerAetherResolverGenerator = (plop: PlopTypes.NodePlopAPI) => {
  plop.setGenerator('aether-resolver', {
    description: 'Create a new data resolver and related schemas, API routes and fetching logic',
    prompts: [
      {
        type: 'list',
        name: 'workspaceTarget',
        message: 'Where would you like to add this resolver?',
        choices: Object.keys(workspaceOptions),
      },
      {
        type: 'input',
        name: 'resolverName',
        message: 'What will you name the resolver function? (e.g. "doSomething")',
      },
      {
        type: 'input',
        name: 'resolverDescription',
        message: 'Optional description: What will this data resolver do?',
      },
      {
        type: 'checkbox',
        name: 'generatables',
        message: 'What else would you like to generate related to this resolver? (auto linked)',
        choices: Object.keys(RESOLVER_GENERATABLES),
        default: Object.keys(RESOLVER_GENERATABLES).filter((opt) => {
          return ['GraphQL', 'GET', 'POST'].some((allowedOpt) => opt.includes(allowedOpt))
        }),
      },
      {
        type: 'list',
        name: 'resolverType',
        message: 'Is this a GraphQL query or mutation?',
        choices: ['query', 'mutation'],
        default: (data) => {
          const isMutatable = ['POST', 'PUT', 'DELETE'].some(includesOption(data.generatables))
          return isMutatable ? 'mutation' : 'query'
        },
        when: (data) => ['GraphQL'].some(includesOption(data.generatables)),
      },
      {
        type: 'input',
        name: 'apiPath',
        message: 'What API path would you like to use for REST? (e.g. "/api/my-resolver/[slug]")',
        default: (data) => {
          const workspacePath = workspaceOptions[data.workspaceTarget]
          const workspaceName = workspacePath.split('/')[1]
          return `/api/${workspaceName}/${camelToDash(data.resolverName)}`
        },
        when: (data) => ['api route', 'GraphQL'].some(includesOption(data.generatables)),
      },
    ],
    actions: (data) => {
      // Args
      const { workspaceTarget, resolverName, resolverType, apiPath, resolverDescription } = data || {} // prettier-ignore
      const generatables = data!.generatables.map((option) => RESOLVER_GENERATABLES[option])
      const workspacePath = workspaceOptions[workspaceTarget]

      // -- Vars --

      const ResolverName = uppercaseFirstChar(resolverName)
      const resolverSchemaName = `${ResolverName}DataBridge`
      const descriptions = [] as string[]

      const argsSchemaDescription = `Args for the ${resolverName}() resolver`
      const argsSchemaName = `${ResolverName}Args`
      descriptions.push(`${argsSchemaName}: '${argsSchemaDescription}',`)
      const argsSchemaLines = '-'.repeat(LINES - argsSchemaName.length)
      const jsDocArgsTitle = `/** --- ${argsSchemaName} ${argsSchemaLines} */`
      const jsDocArgsDescription = `/** -i- ${argsSchemaDescription} */`
      const jsDocArgsHeader = `${jsDocArgsTitle}\n${jsDocArgsDescription}`
      const argsSchemaBody = [`test: z.string().default('Hello World'),`]
      const argsDescriptionStatement = `.describe(d.${argsSchemaName})`

      const resSchemaDescription = `Response for the ${resolverName}() resolver`
      const resSchemaName = `${ResolverName}Response`
      descriptions.push(`${resSchemaName}: '${resSchemaDescription}',`)
      const resSchemaLines = '-'.repeat(LINES - resSchemaName.length)
      const jsDocResTitle = `/** --- ${resSchemaName} ${resSchemaLines} */`
      const jsDocResDescription = `/** -i- ${resSchemaDescription} */`
      const jsDocResHeader = `${jsDocResTitle}\n${jsDocResDescription}`
      const resSchemaBody = ['test: z.string(),']
      const resDescriptionStatement = `.describe(d.${resSchemaName})`

      const apiConfigName = `${resolverName}APIConfig`
      const jsDocResolverConfigTitle = `/** --- ${apiConfigName} ${'-'.repeat(LINES - apiConfigName.length)} */` // prettier-ignore
      const jsDocResolverConfigDescription = `/** -i- Aetherspace API Config for ${resolverName}() */` // prettier-ignore
      const jsDocResolverConfigHeader = `${jsDocResolverConfigTitle}\n${jsDocResolverConfigDescription}` // prettier-ignore
      const apiPathStatements = [''] as string[]
      const allowedMethods = generatables.filter(matchMethods(['GET', 'POST', 'PUT']))
      const allowGET = allowedMethods.includes('GET')
      const allowPOST = allowedMethods.includes('POST')
      const allowPUT = allowedMethods.includes('PUT')
      const hasGraphResolver = generatables.includes('graphResolver')

      const jsDocResolverTitle = `/** --- ${resolverName} ${'-'.repeat(LINES - resolverName.length)} */` // prettier-ignore
      const jsDocResolverDescription = `/** -i- ${resolverDescription || 'TODO: Add description'} */` // prettier-ignore
      const jsDocResolverHeader = `${jsDocResolverTitle}\n${jsDocResolverDescription}`

      const apiStatements = [] as string[]
      const serverUtilImports = [] as string[]

      // -- Helpers --

      const addApiMethod = (method: string) => {
        apiStatements.push(`export const ${method} = makeNextRouteHandler(${resolverName})\n`)
      }

      // -- Optionals --

      const extraActions = [] as PlopTypes.ActionType[]
      const requiresApiRoute = !!apiPath || allowGET || allowPOST || allowPUT || hasGraphResolver

      if (requiresApiRoute) {
        // Add API route instructions to the resolver config
        const apiRoutePath = `${workspacePath}/routes/${apiPath}/route.ts`
        apiPathStatements.push(`apiPath: '${apiPath}',`)
        const allowedMethodsStringArray = `${allowedMethods.map((m) => `'${m}'`).join(', ')}`
        apiPathStatements.push(`allowedMethods: [${allowedMethodsStringArray}],`)

        // Add API route file action data
        const traversalParts = apiPath.split('/').map(() => '..')
        const resolverImportPath = `${traversalParts.join('/')}/resolvers/${resolverName}`

        // Figure out API statements
        if (allowGET || allowPOST || allowPUT) {
          serverUtilImports.push('makeNextRouteHandler')
          const apiPathTitle = `/** --- ${apiPath} ${'-'.repeat(LINES - apiPath.length)} */\n`
          apiStatements.push(apiPathTitle)
          if (allowGET) addApiMethod('GET')
          if (allowPOST) addApiMethod('POST')
          if (allowPUT) addApiMethod('PUT')
        }

        // Add GraphQL resolver?
        if (hasGraphResolver) {
          serverUtilImports.push('makeGraphQLResolver')
          apiStatements.push(`/* --- GraphQL ${'-'.repeat(LINES - 'GraphQL'.length)} */\n`)
          apiStatements.push(`export const graphResolver = makeGraphQLResolver(${resolverName})\n`)
        }

        // Add API route file action
        extraActions.push({
          type: 'add',
          path: apiRoutePath,
          templateFile: '../../packages/@aetherspace/generators/templates/resolver-route.hbs',
          data: {
            resolverName,
            resolverImportPath,
            serverUtilImports: serverUtilImports.join(', '),
            apiStatements: apiStatements.join('\n'),
          },
        })
      }

      // -- Generate --

      return [
        {
          type: 'add',
          path: `${workspacePath}/schemas/${resolverSchemaName}.ts`,
          templateFile: '../../packages/@aetherspace/generators/templates/resolver-bridge.hbs',
          data: {
            descriptions: descriptions.join('\n  '),
            resolverName,
            ResolverName,
            resolverType,
            ResolverType: uppercaseFirstChar(resolverType),
            // - Args -
            jsDocArgsHeader,
            argsSchemaBody: argsSchemaBody.join('\n  '),
            jsDocArgsDescription,
            argsDescriptionStatement,
            // - Response -
            jsDocResponseHeader: jsDocResHeader,
            responseSchemaBody: resSchemaBody.join('\n  '),
            jsDocResponseDescription: jsDocResDescription,
            responseDescriptionStatement: resDescriptionStatement,
            // - Config -
            jsDocResolverConfigHeader,
            apiPathStatements: apiPathStatements.join('\n  '),
          },
        },
        {
          type: 'append-last-line',
          path: `${workspacePath}/schemas/index.ts`,
          template: `export * from './${resolverSchemaName}'\n`,
          pattern: /^(.*\S)[\r\n]*$/,
        },
        {
          type: 'add',
          path: `${workspacePath}/resolvers/${resolverName}.ts`,
          templateFile: '../../packages/@aetherspace/generators/templates/basic-resolver.hbs',
          data: {
            resolverName,
            ResolverName,
            jsDocResolverHeader,
          },
        },
        {
          type: 'append-last-line',
          path: `${workspacePath}/resolvers/index.ts`,
          template: `export * from './${resolverName}'\n`,
          pattern: /^(.*\S)[\r\n]*$/,
        },
        ...extraActions,
        {
          type: 'collect-resolvers',
        },
        {
          type: 'link-routes',
        },
        {
          type: 'open-files-in-vscode',
          paths: [
            `${workspacePath}/schemas/${resolverSchemaName}.ts`,
            `${workspacePath}/resolvers/${resolverName}.ts`,
          ],
        },
      ]
    },
  })
}
