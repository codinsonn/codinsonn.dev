// -i- Based on: https://github.com/axeldelafosse/expo-next-monorepo-example/blob/main/packages/next/next.config.js
const { withExpo } = require('@expo/next-adapter')
const withFonts = require('next-fonts')
const withImages = require('next-images')

// https://github.com/Automattic/mongoose/issues/13212#issuecomment-1518012851
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')

/* --- Transpiled Modules ---------------------------------------------------------------------- */

const transpiledModules = require('config/transpiledModules')
const withTM = require('next-transpile-modules')(transpiledModules)

/* --- Automation Scripts ---------------------------------------------------------------------- */
// -i- This will run the aetherspace automation scripts on local dev builds (comment out what you don't need)
const withAutomation = () => {
    // -i- Check for missing dependencies and env vars in all workspaces
    console.log('\n')
    require('aetherspace/scripts/check-workspaces')
    // -i- Rebuild routing from '/routes/' folders in '/features/' & '/packages/'
    console.log('\n')
    require('aetherspace/scripts/link-routes')
    // -i- Build 'packages/@registries/resolvers.generated.ts':
    // -i- Turns all API paths built with aetherResolver into GraphQL resolvers as well
    console.log('\n')
    require('aetherspace/scripts/collect-resolvers')
    // -i- Build 'packages/@registries/assets.generated.ts':
    // -i- Makes regular img src paths like on the web work for AetherImage in Expo
    console.log('\n')
    require('aetherspace/scripts/collect-assets')
    // -i- Build 'packages/@registries/icons.generated.ts':
    // -i- Registers icons for use in the <AetherIcon/> component
    console.log('\n')
    require('aetherspace/scripts/collect-icons')
    // -i- Clear out autogenerated docs folder so it can be rebuilt
    console.log('\n')
    require('aetherspace/scripts/documentation-reset')
    // -i- Autogenerate documentation for all components hooking into the automation script
    // -i- Enable by exporting a 'getDocumentationProps' object or function from a component
    require('aetherspace/scripts/document-components')
    console.log('\n')
}

/* --- PWA Config ------------------------------------------------------------------------------ */

const withPWA = require('next-pwa')({
    // https://github.com/shadowwalker/next-pwa#available-options
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    // -i- Enable these to make the app a full PWA with service worker
    // register: true,
    // scope: '/app',
    // sw: 'service-worker.js',
})

/* --- Build Next Config ----------------------------------------------------------------------- */

const projectRoot = __dirname
const workspaceRoot = `${projectRoot}/../..`

// -i- Next specific config, e.g. https://nextjs.org/docs/api-reference/next.config.js/introduction
/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        domains: ['i3.ytimg.com'],
    },
    webpack: (config, { isServer }) => {
        // -i- Run aetherspace automation scripts in DEV mode
        if (!isServer && process.env.NODE_ENV === 'development') withAutomation()
        // Enable top level await in API handlers
        config.experiments.topLevelAwait = true
        // Silence warnings about "unexpected" resolutions (file-loader)
        config.infrastructureLogging = { level: "error" }
        // Aliases for web support (https://github.com/expo/expo/issues/21469#issuecomment-1576001543)
        config.resolve.alias['expo-asset'] = 'expo-asset-web'
        // Disable optional mongodb dependencies & warnings about them
        // TODO: Make this dynamic
        config.resolve.alias['@mongodb-js/zstd'] = false
        config.resolve.alias['@aws-sdk/credential-providers'] = false
        config.resolve.alias['snappy'] = false
        config.resolve.alias['aws4'] = false
        config.resolve.alias['mongodb-client-encryption'] = false
        config.resolve.alias['kerberos'] = false
        config.resolve.alias['supports-color'] = false
        config.plugins.push(new FilterWarningsPlugin({
            exclude: [/the request of a dependency is an expression/],
        }))
        // Return config
        return config
    },
    // App dir support
    reactStrictMode: true,
    experimental: {
        // transpilePackages: transpiledModules,
    },
}

// Apply plugins to next config, avoiding next-compose-plugins:
// -i- https://github.com/cyrilwanner/next-compose-plugins/issues/59#issuecomment-1209152211
// -i- https://github.com/cyrilwanner/next-compose-plugins/issues/59#issuecomment-1220739666
const plugins = [withTM, withFonts, withImages, withPWA, [withExpo, { projectRoot: workspaceRoot }]]
const withPlugins = (_phase /*, { defaultConfig } */) => {
    // Build final config
    const finalConfig = plugins.reduce(
        (acc, plugin) => {
            // Handle plugins with options
            if (Array.isArray(plugin)) return { ...acc, ...plugin[0](acc, plugin[1]) }
            // Handle plugins without options
            return { ...acc, ...plugin(acc) }
        },
        { ...nextConfig }
    )
    // Return final config
    return finalConfig;
}

/* --- Exports --------------------------------------------------------------------------------- */

module.exports = withPlugins
