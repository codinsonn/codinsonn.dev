/* --------------------------------------------------------------------------------------------- */
/* -i- https://tamagui.dev/docs/core/configuration */
/* --------------------------------------------------------------------------------------------- */
import { config as defaultTamaguiConfig } from '@tamagui/config'
import { createTamagui } from 'tamagui'

const appConfig = createTamagui({
  ...defaultTamaguiConfig,
  // Extend or edit as needed
})

export type AppConfig = typeof appConfig

declare module 'tamagui' {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  type TamaguiCustomConfig = AppConfig
}

export default appConfig
