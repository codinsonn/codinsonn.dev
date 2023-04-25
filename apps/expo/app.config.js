// Load env vars from .env file in next app
require('dotenv').config({ path: '../next/.env' });

// Once executed, will apply the env vars that start with "NEXT_PUBLIC_" & "EXPO_PUBLIC_"
const aetherAppConfig = require('config/app.config');

/* --- Config ---------------------------------------------------------------------------------- */
// -i- Extends or overwrites the static Expo config defined in app.json
const config = ({ config }) => {
    // EAS updates config (only applied when not using expo publish)
    const easConfig = {
        updates: {
            enabled: true,
            checkAutomatically: 'ON_LOAD',
            fallbackToCacheTimeout: 0,
            // -!- TODO: This URL is supposed to be different per project and won't work if not changed
            // -i- TODO: Figure out your own URL by running 'eas-cli updates:configure'
            url: 'https://u.expo.dev/83944f8e-d6d2-42ce-a6fc-349079657932',
        },
        extra: {
            eas: {
                // -i- TODO: Figure out your own projectId by running 'eas-cli updates:configure'
                projectId: '83944f8e-d6d2-42ce-a6fc-349079657932',
            },
        },
        runtimeVersion: {
            policy: 'sdkVersion',
        },
    }
    // Extend the config by merging with the aetherspace required config
    // "NEXT_PUBLIC_" & "EXPO_PUBLIC_" env vars made available through dotenv will be applied to the config
    const finalConfig = aetherAppConfig({
        config: {
            ...config,
            // Only apply EAS config when using the expo-cli to publish
            ...(!!process.env.EXPO_PUBLISH ? {} : easConfig),
        }
    })
    // Wrap up & return
    return finalConfig;
}

/* --- Exports --------------------------------------------------------------------------------- */

module.exports = config
