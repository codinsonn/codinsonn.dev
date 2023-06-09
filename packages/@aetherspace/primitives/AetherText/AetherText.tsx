// -i- Based on / inspired by:
// - https://docs.expo.dev/versions/latest/react-native/text/
// - https://necolas.github.io/react-native-web/docs/text/
import React, { createContext, useContext, forwardRef, ComponentProps } from 'react'
import { Text } from 'react-native'
// Schemas
import { TAetherStyleProps } from '../../schemas/ats'
// Hooks
import { useAetherStyles } from '../../hooks'

/* --- Context --------------------------------------------------------------------------------- */

const DEFAULT_TEXT_CONTEXT = { color: null } as { color: string | null }
const TextContext = createContext(DEFAULT_TEXT_CONTEXT)
export const useTextContext = () => useContext(TextContext)

/* --- Types ----------------------------------------------------------------------------------- */

type AetherTextType = ComponentProps<typeof Text> &
  TAetherStyleProps & {
    style?: ComponentProps<typeof Text>['style']
    children?: any
  }

/* --- useAetherText --------------------------------------------------------------------------- */

const useAetherText = ({ children, ...props }: AetherTextType) => {
  // Styles
  const bindStyles = useAetherStyles<typeof Text>(props)

  // Context
  const contextColor = useTextContext() // @ts-ignore
  const textColor: string | undefined = bindStyles.style?.color || contextColor // Remember color for children

  // -- Return --

  return { ...props, textColor, textContent: children, bindStyles }
}

/* --- <AetherText/> --------------------------------------------------------------------------- */

const AetherText = forwardRef<Text, AetherTextType>((props, ref) => {
  // Hooks
  const { textColor, textContent, bindStyles } = useAetherText(props)
  // Render
  return textColor ? (
    <TextContext.Provider value={{ color: textColor }}>
      <Text {...props} {...bindStyles}>
        {textContent}
      </Text>
    </TextContext.Provider>
  ) : (
    <Text {...props} ref={ref} {...bindStyles}>
      {textContent}
    </Text>
  )
})

AetherText.displayName = 'AetherText'

/* --- Exports --------------------------------------------------------------------------------- */

export default Object.assign(AetherText, {
  TYPE: undefined as unknown as AetherTextType,
})
