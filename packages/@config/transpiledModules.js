// -i- The order of these is important -!-
// -i- Always do 3rd party packages first, then internal packages, then the rest
// -i- Try to list these in order of dependence (e.g. node_modules <- aetherspace <- some-feature)
module.exports = [
    // - Modules -
    'twrnc',
    '@react-native/assets-registry',
    '@expo/vector-icons',
    // - Packages -
    'registries',
    'aetherspace',
    '@green-stack/icons',
    '@aetherspace/commerce',
    // - Features -
    'app',
    'links-page',
    'cv-page',
]
