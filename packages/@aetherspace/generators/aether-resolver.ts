/* eslint-disable import/no-anonymous-default-export */
import { PlopTypes } from '@turbo/gen'
import {
  getWorkspaceOptions,
  matchMethods,
  camelToDash,
  uppercaseFirstChar,
  includesOption,
  validateNonEmptyNoSpaces,
  createAutocompleteSource,
  getAvailableSchemas,
} from '../scripts/helpers/scriptUtils'

/* --- Disclaimer ------------------------------------------------------------------------------ */

// Learn more about Turborepo Generators at:
// https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

/* --- Constants ------------------------------------------------------------------------------- */

const workspaceOptions = getWorkspaceOptions('')
const availableSchemas = getAvailableSchemas('')

const LINES = 100 - 13 // -i- JSDoc: 100 = max length, 13 = everything but the title & '-' lines

const RESOLVER_GENERATABLES = Object.freeze({
  'GraphQL resolver': 'graphResolver',
  'GET api route': 'GET',
  'POST api route': 'POST',
  'PUT api route': 'PUT',
  'Custom Args & Response Schemas (skips schema pickers)': 'schemas',
  'Typed formState hook (for resolver args)': 'formHook',
  // "Typed fetching function, e.g. fetchResources()": 'fetch',
  // "Typed fetcher hook, e.g. useFetchResources()": 'fetchHook',
})

const GraphqlQueryOption = 'GraphQL Query >>> for retrieving data'
const GraphqlMutationOption = 'GraphQL Mutation >>> for updating data'

const NewArgsSchemaOption = "I'd like to create a new schema for the resolver arguments"
const NewResponseSchemaOption = "I'd like to create a new schema for the resolver response"

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
        validate: validateNonEmptyNoSpaces,
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
        name: 'resolverTarget',
        message: 'Is this a GraphQL query or mutation?',
        choices: [GraphqlQueryOption, GraphqlMutationOption],
        default: (data) => {
          const isMutatable = ['POST', 'PUT', 'DELETE'].some(includesOption(data.generatables))
          return isMutatable ? GraphqlMutationOption : GraphqlQueryOption
        },
        when: (data) => ['GraphQL'].some(includesOption(data.generatables)),
      },
      {
        type: 'autocomplete',
        name: 'argsSchemaTarget',
        message: 'Which schema should we use for the resolver arguments?', // @ts-ignore
        source: createAutocompleteSource([NewArgsSchemaOption, ...Object.keys(availableSchemas)]),
        when: (data) => !['Schemas'].some(includesOption(data.generatables)),
      },
      {
        type: 'input',
        name: 'argsSchemaName',
        message: 'What will you call this new args schema?',
        default: (data) => `${uppercaseFirstChar(data.resolverName)}Args`,
        validate: validateNonEmptyNoSpaces,
        when: (data) => data.argsSchemaTarget === NewArgsSchemaOption,
      },
      {
        type: 'autocomplete',
        name: 'resSchemaTarget',
        message: 'Which schema should we use for the resolver response?', // @ts-ignore
        source: createAutocompleteSource([
          NewResponseSchemaOption,
          ...Object.keys(availableSchemas),
        ]),
        default: (data) => data.argsSchemaTarget,
        when: (data) => !['Schemas'].some(includesOption(data.generatables)),
      },
      {
        type: 'input',
        name: 'resSchemaName',
        message: 'What will you call this new response schema?',
        default: (data) => `${uppercaseFirstChar(data.resolverName)}Response`,
        validate: validateNonEmptyNoSpaces,
        when: (data) => data.resSchemaTarget === NewResponseSchemaOption,
      },
      {
        type: 'input',
        name: 'apiPath',
        message: 'What API path would you like to use for REST? (e.g. "/api/some/resolver/[slug]")',
        default: (data) => {
          const workspacePath = workspaceOptions[data.workspaceTarget]
          const workspaceName = workspacePath.split('/')[1].replace('-core', '').replace('-page', '') // prettier-ignore
          return `/api/${workspaceName}/${camelToDash(data.resolverName)}`
        },
        when: (data) => ['api route', 'GraphQL'].some(includesOption(data.generatables)),
        validate: validateNonEmptyNoSpaces,
      },
      {
        type: 'input',
        name: 'formHookName',
        message: 'What should the form hook be called?',
        default: (data) => {
          const { resolverName } = data
          let formHookName = `use${uppercaseFirstChar(resolverName)}Form`
          formHookName = formHookName.replace('Edit', '').replace('Resolver', '').replace('Update', '') // prettier-ignore
          return formHookName
        },
        when: (data) => ['formState hook'].some(includesOption(data.generatables)),
        validate: validateNonEmptyNoSpaces,
      },
    ],
    actions: (data) => {
      // Args
      const { workspaceTarget, resolverName, resolverTarget, apiPath, resolverDescription } = data || {} // prettier-ignore
      const generatables = data!.generatables.map((option) => RESOLVER_GENERATABLES[option])
      const workspacePath = workspaceOptions[workspaceTarget]
      const resolverType = resolverTarget === GraphqlQueryOption ? 'query' : 'mutation'
      const argsSchemaConfig = availableSchemas[data!.argsSchemaTarget]
      const resSchemaConfig = availableSchemas[data!.resSchemaTarget]
      const isLinkedToSchemas = argsSchemaConfig || resSchemaConfig || data!.argsSchemaName || data!.resSchemaName // prettier-ignore

      // -- Vars --

      const ResolverName = uppercaseFirstChar(resolverName)
      const resolverBridgeName = `${ResolverName}DataBridge`
      const descriptions = [] as string[]

      const argsSchemaDescription = `Args for the ${resolverName}() resolver`
      const argsSchemaName = `${ResolverName}Args`
      descriptions.push(`${argsSchemaName}: '${argsSchemaDescription}',`)
      const argsSchemaLines = '-'.repeat(LINES - argsSchemaName.length)
      const jsDocArgsTitle = `/** --- ${argsSchemaName} ${argsSchemaLines} */`
      const jsDocArgsDescription = `/** -i- ${argsSchemaDescription} */`
      const jsDocArgsHeader = `${jsDocArgsTitle}\n${jsDocArgsDescription}`
      const argsSchemaBody = [`test: z.string().default('Hello World'), // TODO: Add your own fields`] // prettier-ignore
      const argsDescriptionStatement = `.describe(d.${argsSchemaName})`

      const resSchemaDescription = `Response for the ${resolverName}() resolver`
      const resSchemaName = `${ResolverName}Response`
      descriptions.push(`${resSchemaName}: '${resSchemaDescription}',`)
      const resSchemaLines = '-'.repeat(LINES - resSchemaName.length)
      const jsDocResTitle = `/** --- ${resSchemaName} ${resSchemaLines} */`
      const jsDocResDescription = `/** -i- ${resSchemaDescription} */`
      const jsDocResHeader = `${jsDocResTitle}\n${jsDocResDescription}`
      const resSchemaBody = [`test: z.string().default('Hello World'), // TODO: Add your own fields`] // prettier-ignore
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
      const extraFilesToOpen = [] as string[]
      const requiresApiRoute = !!apiPath || allowGET || allowPOST || allowPUT || hasGraphResolver
      const requiresFormHook = generatables.includes('formHook')

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
          apiStatements.push(`/* --- GraphQL ${'-'.repeat(LINES - 'GraphQL'.length + 1)} */\n`)
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

      // Add form hook?
      if (requiresFormHook) {
        const { formHookName } = data || {}
        const formHookDivider = `/* --- ${formHookName}() ${'-'.repeat(LINES - formHookName.length - 1)} */` // prettier-ignore
        extraActions.push({
          type: 'add',
          path: `${workspacePath}/forms/${formHookName}.ts`,
          templateFile: '../../packages/@aetherspace/generators/templates/resolver-form-hook.hbs',
          data: {
            ResolverName,
            formHookName,
            formHookDivider,
            workspaceName: '..',
          },
        })
        extraFilesToOpen.push(`${workspacePath}/forms/${formHookName}.ts`)
      }

      // Add args schema?
      if (data!.argsSchemaName) {
        const ArgsSchemaName = uppercaseFirstChar(data!.argsSchemaName)
        const jsDocTitle = `/* --- ${ArgsSchemaName} ${'-'.repeat(
          LINES - ArgsSchemaName.length
        )} */`
        extraActions.push({
          type: 'add',
          path: `${workspacePath}/schemas/${ArgsSchemaName}.ts`,
          templateFile: '../../packages/@aetherspace/generators/templates/basic-schema.hbs',
          data: {
            descriptions: descriptions.join('\n  '),
            jsDocHeader: `${jsDocTitle}\n`,
            schemaName: ArgsSchemaName,
            schemaBody: ``,
            describeStatement: ``,
            jsDocDescription: ``,
          },
        } as PlopTypes.ActionType)
        extraFilesToOpen.push(`${workspacePath}/schemas/${ArgsSchemaName}.ts`)
      }

      // Add response schema?
      if (data!.resSchemaName) {
        const ResSchemaName = uppercaseFirstChar(data!.resSchemaName)
        const jsDocTitle = `/* --- ${ResSchemaName} ${'-'.repeat(LINES - ResSchemaName.length)} */`
        extraActions.push({
          type: 'add',
          path: `${workspacePath}/schemas/${ResSchemaName}.ts`,
          templateFile: '../../packages/@aetherspace/generators/templates/basic-schema.hbs',
          data: {
            descriptions: descriptions.join('\n  '),
            jsDocHeader: `${jsDocTitle}\n`,
            schemaName: ResSchemaName,
            schemaBody: ``,
            describeStatement: ``,
            jsDocDescription: ``,
          },
        } as PlopTypes.ActionType)
        extraFilesToOpen.push(`${workspacePath}/schemas/${ResSchemaName}.ts`)
      }

      // -- Data Bridge --

      let dataBridgeStep = {
        type: 'add',
        path: `${workspacePath}/schemas/${resolverBridgeName}.ts`,
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
      } as PlopTypes.ActionType

      if (isLinkedToSchemas) {
        const ArgsSchemaName = uppercaseFirstChar(argsSchemaConfig?.schemaName || data!.argsSchemaName) // prettier-ignore
        const ResSchemaName = uppercaseFirstChar(resSchemaConfig?.schemaName || data!.resSchemaName)
        const argsSchemaWorkspace = argsSchemaConfig?.workspaceName || '..'
        const resSchemaWorkspace = resSchemaConfig?.workspaceName || '..'
        const argsSchemaImportStatement = `import { ${ArgsSchemaName} } from '${argsSchemaWorkspace}/schemas/${ArgsSchemaName}'`
        const resSchemaImportStatement = `import { ${ResSchemaName} } from '${resSchemaWorkspace}/schemas/${ResSchemaName}'`
        dataBridgeStep = {
          type: 'add',
          path: `${workspacePath}/schemas/${resolverBridgeName}.ts`,
          templateFile: '../../packages/@aetherspace/generators/templates/resolver-bridge-w-schemas.hbs', // prettier-ignore
          data: {
            descriptions: descriptions.join('\n  '),
            resolverName,
            ResolverName,
            resolverType,
            ResolverType: uppercaseFirstChar(resolverType),
            // - Args -
            ArgsSchemaName,
            argsSchemaImportStatement,
            InputSchemaName: argsSchemaConfig ? `${ArgsSchemaName}Input` : ArgsSchemaName,
            inputSchemaTransforms: argsSchemaConfig ? `.extendSchema('${ArgsSchemaName}Input', {})` : '', // prettier-ignore
            ResSchemaName,
            resSchemaImportStatement: argsSchemaImportStatement === resSchemaImportStatement ? '' : resSchemaImportStatement, // prettier-ignore
            // - Config -
            jsDocResolverConfigHeader,
            apiPathStatements: apiPathStatements.join('\n  '),
          },
        }
      }

      // -- Generate --

      return [
        dataBridgeStep,
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
            `${workspacePath}/schemas/${resolverBridgeName}.ts`,
            `${workspacePath}/resolvers/${resolverName}.ts`,
            ...extraFilesToOpen,
          ],
        },
      ]
    },
  })
}
