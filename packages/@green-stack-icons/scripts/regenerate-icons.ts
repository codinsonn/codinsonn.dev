/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs') as typeof import('fs')
const glob = require('glob') as typeof import('glob')
import { transform } from '@svgr/core'

/* --- Helpers --------------------------------------------------------------------------------- */

const dashToCamel = (str: string) => str.replace(/(-\w)/g, (m) => m[1].toUpperCase())

const uppercaseFirstChar = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

/* --- Constants ------------------------------------------------------------------------------- */

const TYPES_DVDR = `\n/* --- Types ${'-'.repeat(100 - 5 - 12)} */\n`
const PROPS_TYPE = `${TYPES_DVDR}\ntype IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }\n`
const ICON_PROPS = `{\n  size = 24,\n  fill = '#333333',\n  stroke = '#FFFFFF',\n  ...svgProps\n}: IconProps`

/* --- Templates ------------------------------------------------------------------------------- */

const ICON_REGISTRY = `
import * as icons from './index'

/** --- iconRegistry --------------------------------------------------------------------------- */
/** -i- Register any icons by preferred AetherIcon "name" key */
export const iconRegistry = {
{{icons}}
} as const
`

/* --- generateIcons() ------------------------------------------------------------------------- */

const generateIcons = async () => {
  // Gather all icon files
  const iconFiles = glob.sync('./assets/**/*.svg')

  // Index files
  const barrelFilesMap = {} as Record<string, string[]>
  const iconRegistryMap = {} as Record<string, string[]>

  // Loop through all icon files
  iconFiles.map(async (iconFile, i) => {
    // Figure out names from file path
    const folderParts = iconFile.replace('./assets/', '').split('/')
    const [iconSvgFilename, ...iconGroupParts] = [...folderParts].reverse()
    const iconFilename = iconSvgFilename.replace('.svg', '').replaceAll(' ', '-') // e.g. 'some-icon'
    const iconName = uppercaseFirstChar(dashToCamel(iconFilename)) // e.g. 'SomeIcon'
    const iconGroupFolderName = iconGroupParts.reverse().join('-') // e.g. 'shape-icons'

    // Figure out target file paths
    const targetFolder = `./icons/${iconGroupFolderName}`
    const targetIndexFilename = `${targetFolder}/index.ts`
    const targetRegistryFilename = `${targetFolder}/registry.tsx`
    const targetIconFilename = `${targetFolder}/${iconName}.tsx`

    // Transform SVG to TSX
    const svgCode = fs.readFileSync(iconFile, 'utf8').replaceAll(' undefined="1"', '')
    let tsxCode = transform.sync(
      svgCode,
      {
        icon: true,
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
        native: true,
        ref: false,
        expandProps: 'end',
        typescript: true,
      },
      { componentName: iconName }
    )

    // Transform tsx code to match our conventions
    const nameDivider = `\n/* --- <${iconName}/> ${'-'.repeat(100 - iconName.length - 3 - 12)} */\n`
    tsxCode = tsxCode.replace(`"react"`, `'react'`)
    tsxCode = tsxCode.replace(`"react-native-svg"`, `'react-native-svg'`)
    tsxCode = tsxCode.replace(/import type { .* } from "react-native-svg"/, 'import type { SvgProps } from "react-native-svg"')
    tsxCode = tsxCode.replaceAll(`const ${iconName} = (props: SvgProps) => (`, `${PROPS_TYPE}${nameDivider}\nexport const ${iconName} = (${ICON_PROPS}) => (`) // prettier-ignore
    tsxCode = tsxCode.replace(`xmlns="http://www.w3.org/2000/svg"\n    `, '')
    tsxCode = tsxCode.replace(`width={24}`, `width={size}`)
    tsxCode = tsxCode.replace(`height={24}`, `height={size}`)
    tsxCode = tsxCode.replace(`{...props}`, `{...svgProps}`)
    tsxCode = tsxCode.replaceAll(`"black"`, `{fill}`)
    tsxCode = tsxCode.replaceAll(`"#000000"`, `{fill}`)
    tsxCode = tsxCode.replaceAll(`"#333333"`, `{fill}`)
    tsxCode = tsxCode.replaceAll(`"#221b38"`, `{fill}`)
    tsxCode = tsxCode.replaceAll(`"#221B38"`, `{fill}`)
    tsxCode = tsxCode.replaceAll(`"white"`, `{fill}`)
    tsxCode = tsxCode.replaceAll(`"#fff"`, `{stroke}`)
    tsxCode = tsxCode.replaceAll(`"#FFF"`, `{stroke}`)
    tsxCode = tsxCode.replaceAll(`"#fffff"`, `{stroke}`)
    tsxCode = tsxCode.replaceAll(`"#FFFFFF"`, `{stroke}`)
    tsxCode = tsxCode.replaceAll(`export default ${iconName};`, '')
    tsxCode = tsxCode.replaceAll(`;\n`, '\n')
    if (!tsxCode.includes('{stroke}')) tsxCode = tsxCode.replaceAll(`  stroke = '#FFFFFF',\n`, '')

    // Write icon file
    fs.mkdirSync(targetFolder, { recursive: true })
    fs.writeFileSync(targetIconFilename, tsxCode)

    // Add to index file
    if (!barrelFilesMap[targetIndexFilename]) barrelFilesMap[targetIndexFilename] = []
    barrelFilesMap[targetIndexFilename].push(`export { ${iconName} } from './${iconName}'`)

    // Add to icon registry
    if (!iconRegistryMap[targetRegistryFilename]) iconRegistryMap[targetRegistryFilename] = []
    iconRegistryMap[targetRegistryFilename].push(`  '${iconFilename}': icons.${iconName},`)
  })

  // Write index files
  Object.keys(barrelFilesMap).map((targetIndexFilename) => {
    const barrelFiles = barrelFilesMap[targetIndexFilename]
    const barrelCode = `${barrelFiles.join('\n')}\n`
    fs.writeFileSync(targetIndexFilename, barrelCode)
  })

  // Write icon registry files
  Object.keys(iconRegistryMap).map((targetRegistryFilename) => {
    const iconRegistry = iconRegistryMap[targetRegistryFilename]
    const iconRegistryCode = ICON_REGISTRY.replace('{{icons}}', iconRegistry.join('\n'))
    fs.writeFileSync(targetRegistryFilename, iconRegistryCode)
  })
}

/* --- Execute --------------------------------------------------------------------------------- */

generateIcons()
