import * as dotenv from 'dotenv'
import glob from 'glob'
import fs from 'fs'
// Utils
import { excludeDirs, parseWorkspaces } from './helpers/scriptUtils'
import { isEmpty } from '../utils/commonUtils'

/* --- Constants ------------------------------------------------------------------------------- */

const KNOWN_ENV_VARS = ['NODE_ENV', 'TZ', 'PORT', 'MAX_TRIES', 'IS_DEEP_CHECK']
const SKIPPED_WORKSPACES = ['aetherspace', 'config', 'registries']

/* --- check-workspaces ------------------------------------------------------------------------ */

const checkWorkspaces = async (isDeepCheck = true) => {
  try {
    // Load .env file in dev mode
    const isDev = process.env.NODE_ENV !== 'production'
    const hasEnvFile = fs.existsSync('../../apps/next/.env')
    if (isDev && hasEnvFile) dotenv.config({ path: '../../apps/next/.env' })

    // Scan all /features/  and /packages/ workspace .ts & .tsx files
    const featureFiles = glob.sync('../../features/**/*.ts*').filter(excludeDirs)
    const packageFiles = glob.sync('../../packages/**/*.ts*').filter(excludeDirs)
    const allWsFiles = [...featureFiles, ...packageFiles]

    // Figure out import paths from each workspace
    const { workspaceConfigs, workspaceImports, workspacePaths, workspacePackages } = parseWorkspaces() // prettier-ignore

    // Loop through each workspace and track its imports and env var uses
    const workspaceMap = {}
    // prettier-ignore
    await Promise.all(workspacePaths.map(async (workspacePath) => {
      const workspacePackage = workspaceImports[workspacePath]

      // Double check based on file paths if a deep check is requested
      if (isDeepCheck) {
        // Get the related package JSON config
        const packageJSON = workspaceConfigs[workspacePath]
        const shouldSkip = false // SKIPPED_WORKSPACES.includes(workspacePackage)
        // Get all the lines of code from the workspace
        const workspaceFiles = allWsFiles.filter((filePath) => filePath.includes(`${workspacePath}/`))
        const fileContents = workspaceFiles.map((filePath) => fs.readFileSync(filePath, 'utf8'))
        const allLinesOfCode = fileContents.map((content) => content.split('\n')).flat()
        // Rebuild the related workspaces list
        const allImportLines = allLinesOfCode.filter((line) => line.includes(` from '`))
        const allImportPaths = allImportLines.map((line) => line.split(` from '`)[1].split(`'`)[0])
        const newRelatedWorkspaces = workspacePackages.filter((wsPkg) => allImportPaths.includes(wsPkg)) // prettier-ignore
        // Rebuild the required env vars list
        const allProcessEnvLines = allLinesOfCode.filter((line) => line.includes('process.env.'))
        const allProcessEnvVars = allProcessEnvLines.map((line) => line.match(/process\.env\.([A-Z0-9_]+)/)?.[1]) // prettier-ignore
        const allGetEnvVarLines = allLinesOfCode.filter((line) => line.includes(`getEnvVar('`))
        const allGetEnvVarVars = allGetEnvVarLines.map((line) => line.match(/getEnvVar\('([A-Z0-9_]+)'\)/)?.[1]) // prettier-ignore
        const filterEnvs = (envVar) => {
            if (shouldSkip) return false // Don't check aetherspace packages
            if (!envVar || envVar.includes('STORYBOOK_')) return false // Skip storybook env vars
            return !KNOWN_ENV_VARS.includes(envVar)
        }
        const newRequiredEnvVars = [...allProcessEnvVars, ...allGetEnvVarVars].filter(filterEnvs)
        // Rebuild the "aetherspace" config for the package.json
        const existingRelations = packageJSON?.aetherspace?.relatedWorkspaces || []
        const prevRequiredEnvVars = packageJSON?.aetherspace?.requiredEnvVars || []
        const relatedWorkspaces = Array.from(new Set([...existingRelations, ...newRelatedWorkspaces])) // prettier-ignore
        const requiredEnvVars = Array.from(new Set([...prevRequiredEnvVars, ...newRequiredEnvVars])) // prettier-ignore
        workspaceMap[workspacePath] = {
            ...packageJSON.aetherspace,
            relatedWorkspaces,
            requiredEnvVars,
        }
        // Save the updated package.json?
        const hasChangedRelations = existingRelations.join('-') !== relatedWorkspaces.join('-')
        const hasChangedEnvVars = prevRequiredEnvVars.join('-') !== requiredEnvVars.join('-')
        const hasChanged = !shouldSkip && (hasChangedRelations || hasChangedEnvVars)
        if (hasChanged) {
            if (!packageJSON.aetherspace) packageJSON.aetherspace = { relatedWorkspaces, requiredEnvVars } // prettier-ignore
            packageJSON.aetherspace.relatedWorkspaces = relatedWorkspaces
            packageJSON.aetherspace.requiredEnvVars = requiredEnvVars
            fs.writeFileSync(`../../${workspacePath}/package.json`, `${JSON.stringify(packageJSON, null, 4)}\n`)
        }
      }

      // Do a shallow check of the workspace's package.json
      if (!isDeepCheck) {
        const packageJSON = workspaceConfigs[workspacePath]
        const relatedWorkspaces = packageJSON?.aetherspace?.relatedWorkspaces || []
        const requiredEnvVars = packageJSON?.aetherspace?.requiredEnvVars || []
        workspaceMap[workspacePath] = { workspacePackage, relatedWorkspaces, requiredEnvVars }
      }

      // Check for missing env vars
      const { requiredEnvVars } = workspaceMap[workspacePath] || {}
      const getEnvVar = (envVar) => process.env[envVar] || process.env[`NEXT_PUBLIC_${envVar}`] || process.env[`EXPO_PUBLIC_${envVar}`] || process.env[`STORYBOOK_${envVar}`] // prettier-ignore
      const missingEnvVars = requiredEnvVars.filter((envVar) => isEmpty(getEnvVar(envVar)))

      // Check for missing related workspaces
      const { relatedWorkspaces } = workspaceMap[workspacePath]
      const workspaceIdentifiers = [...workspacePaths, ...workspacePackages]
      const missingWorkspaces = relatedWorkspaces.filter((ws) => !workspaceIdentifiers.includes(ws))

      // Warn of any missing env vars or related workspaces
      if (missingEnvVars.length || missingWorkspaces.length) console.warn(`\n-!- --- /${workspacePath}/ ${'-'.repeat(45 - workspacePath.length - 2)} -!-`) // prettier-ignore
      if (missingEnvVars.length) {
        console.warn(`-!- ⚠️ Missing env vars for '/${workspacePath}/':`, missingEnvVars.join(', '))
        console.warn(`-i- Please add these through a secret manager (like doppler.com) or another env var config like .env`) // prettier-ignore
        console.warn(`-i- You may need to prefix them with NEXT_PUBLIC_ or EXPO_PUBLIC_ depending on the target`) // prettier-ignore
        if (isDev && !hasEnvFile) {
          console.warn(`-!- Couldn't detect a .env file in /apps/next/ - you may need to create one, see .example.env`) // prettier-ignore
        }
      }
      if (missingWorkspaces.length) {
        console.warn(`-!- ⚠️ Missing related workspaces for '/${workspacePath}': ${missingWorkspaces.join(', ')}`) // prettier-ignore
        console.warn(`-i- Either:  a) Merge them in from your 'aetherspace' starter repo (or a personalised fork)`) // prettier-ignore
        console.warn(`             b) Copy the related workspace over from another project to /features/ or /packages/`) // prettier-ignore
      }
      if (missingEnvVars.length || missingWorkspaces.length) console.warn(`-!- ${'-'.repeat(50)} -!-\n`) // prettier-ignore

      // Return the workspace map
      return true
    }))

    // Results
    console.log(workspaceMap)
  } catch (err) {
    console.log(err)
    console.error(err)
    process.exit(1)
  }
}

/* --- init ------------------------------------------------------------------------------------ */

checkWorkspaces(!!process.env.IS_DEEP_CHECK && !!JSON.parse(process.env.IS_DEEP_CHECK))
