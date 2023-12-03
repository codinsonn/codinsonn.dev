import glob from 'glob'
import fs from 'fs'

/** --- excludeDirs() -------------------------------------------------------------------------- */
/** -i- Filter function to exclude folders and directories */
export const excludeDirs = (pth) => pth.split('/').pop().includes('.')

/** --- excludeModules() ----------------------------------------------------------------------- */
/** -i- Filter function to exclude node_modules folders */
export const excludeModules = (pth) => !pth.includes('node_modules')

/** --- parseWorkspaces() ----------------------------------------------------------------------- */
/** -i- Figure out all info about all workspaces and return mapped linking info for use in scripts */
export const parseWorkspaces = (folderLevel = '../../') => {
  // Get all workspace package.json paths
  const packageConfigPaths = glob.sync(`${folderLevel}packages/**/package.json`).filter(excludeModules) // prettier-ignore
  const featureConfigPaths = glob.sync(`${folderLevel}features/**/package.json`).filter(excludeModules) // prettier-ignore
  const packageJSONPaths = [...packageConfigPaths, ...featureConfigPaths]

  // Map to keep track of all workspace package configs, filled in next step
  const workspaceConfigs = {} as Record<string, any>

  // Build a map of workspace imports as { [workspacePath]: workspacePackage, ... }
  const workspaceImports = packageJSONPaths.reduce((acc, wsPath) => {
    const packageJSON = JSON.parse(fs.readFileSync(wsPath, 'utf8'))
    const workspaceMatcher = wsPath.replace(`${folderLevel}`, '').replace('/package.json', '')
    workspaceConfigs[workspaceMatcher] = packageJSON
    return { ...acc, [workspaceMatcher]: packageJSON.name }
  }, {}) as Record<string, string>

  // Reverse that map to get a map of workspace packages as { [workspacePackage]: workspacePath, ... }
  const workspacePathsMap = Object.entries(workspaceImports).reduce((acc, [wsPath, pkgName]) => {
    return { ...acc, [pkgName]: wsPath }
  }, {}) as Record<string, string>

  // Other info we might need (sorted by preferred transpilation order > packages first, then features)
  const sortByOrder = (a, b) => (a.includes('packages') && !b.includes('packages') ? -1 : 1)
  const workspacePaths = Object.keys(workspaceImports).sort(sortByOrder)
  const workspacePackages = workspacePaths.map((path) => workspaceImports[path])

  // Return all the info we've gathered
  return {
    /** -i- A mapped object of { [workspacePath]: package.json config, ... } */
    workspaceConfigs,
    /** -i- A mapped object of { [workspacePath]: workspace package name, ... } */
    workspaceImports,
    /** -i- A mapped object of { [workspacePackage]: workspace path, ... } */
    workspacePathsMap,
    /** -i- An array of all workspace paths */
    workspacePaths,
    /** -i- An array of all workspace package names */
    workspacePackages,
  }
}

/** --- getWorkspaceOptions() ------------------------------------------------------------------ */
/** -i- List all the available workspaces for generators to use (map of options to workspace paths) */
export const getWorkspaceOptions = (folderLevel = '../../') => {
  const { workspaceImports } = parseWorkspaces(folderLevel)
  return Object.keys(workspaceImports).reduce((options, workspacePath) => {
    const workspaceName = workspaceImports[workspacePath]
    const workspaceOption = `${workspacePath}  --  importable from: '${workspaceName}'`
    // Skip listing the helper workspaces
    if (['config', 'aetherspace', 'registries'].includes(workspaceName)) return options
    // Add the workspace option
    return { ...options, [workspaceOption]: workspacePath }
  }, {}) as Record<string, string>
}

/* --- getAvailableDataBridges() --------------------------------------------------------------- */
/** -i- List all the available data bridges for generators to use */
export const getAvailableDataBridges = (folderLevel = '../../') => {
  // Get workspace imports
  const { workspaceImports } = parseWorkspaces(folderLevel)

  // Get paths of all Data Bridges
  const packageBridgePaths = glob.sync(`${folderLevel}packages/**/schemas/**DataBridge.ts`).filter(excludeModules) // prettier-ignore
  const featureBridgePaths = glob.sync(`${folderLevel}features/**/schemas/**DataBridge.ts`).filter(excludeModules) // prettier-ignore
  const allDataBridgePaths = [...packageBridgePaths, ...featureBridgePaths].filter((pth) => !pth.includes('createDataBridge')) // prettier-ignore

  // Map to build list of available resolvers to integrate with
  const availableDataBridges = allDataBridgePaths.reduce((acc, bridgePath) => {
    // Figure out the bridge name and contents
    const bridgeName = bridgePath.split('/').pop()!.replace('.ts', '')
    const workspacePath = bridgePath.split('/schemas/')[0]
    const workspaceName = workspaceImports[workspacePath]
    const fileContents = fs.readFileSync(bridgePath, 'utf8')

    // Stop if the bridge is not exported of not found due to name not matching
    const isNamedExport = fileContents.includes(`export const ${bridgeName}`)
    const isDefaultExport = fileContents.includes(`export default ${bridgeName}`)
    if (!isNamedExport && !isDefaultExport) return acc

    // Figure out the resolver name
    const isCallingCreateDataBridge = fileContents.includes('createDataBridge(')
    const resolverName = fileContents.match(/resolverName: '(\w+)'/)?.[1]
    if (!isCallingCreateDataBridge || !resolverName) return acc

    // Build the option to display in the CLI
    const dataBridgeOption = `${resolverName}  --  Resolver from '${workspaceName}' workspace package`

    // Add the bridge to the list of available bridges
    return {
      ...acc,
      [dataBridgeOption]: {
        bridgePath,
        bridgeName,
        workspacePath,
        workspaceName,
        isNamedExport,
        isDefaultExport,
        resolverName,
      },
    }
  }, {}) as Record<
    string,
    {
      bridgePath: string
      bridgeName: string
      workspacePath: string
      workspaceName: string
      isNamedExport: boolean
      isDefaultExport: boolean
      resolverName: string
    }
  >
  return availableDataBridges
}
