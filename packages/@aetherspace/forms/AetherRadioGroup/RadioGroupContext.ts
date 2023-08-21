import { createContext, ComponentProps } from 'react'
import { Pressable, View, Text } from '../../primitives'
// Types
import { stylePropDescription } from 'aetherspace/schemas/ats'
// Schemas
import { z, aetherSchema, AetherProps } from 'aetherspace/schemas'

/* --- Schemas --------------------------------------------------------------------------------- */

const d = {
  tw: `${stylePropDescription}\n\nProviding your own classes will omit all the default tailwind classes ➡️`,
  radioColor: `Radio fill and border color`,
}

export const RadioGroupStyleContext = aetherSchema('RadioGroupStyleContext', {
  radioColor: z.string().color().default('#333333').describe(d.radioColor),
  radioBorderClasses: z.string().default('w-[16px] h-[16px] border-[1px] border-solid rounded-full mr-2 items-center justify-center').describe(d.tw), // prettier-ignore
  radioIndicatorClasses: z.string().default('w-[8px] h-[8px] rounded-full').describe(d.tw),
  labelClasses: z.string().default('text-primary text-[14px] leading-[18px]').describe(d.tw),
})

/* --- Types ----------------------------------------------------------------------------------- */

export type RadioGroupComponentProps = {
  pressableWrapperProps?: ComponentProps<typeof Pressable>
  radioBorderViewProps?: ComponentProps<typeof View>
  radioIndicatorViewProps?: ComponentProps<typeof View>
  labelTextProps?: ComponentProps<typeof Text>
}

export type RadioGroupStyleContextType = AetherProps<typeof RadioGroupStyleContext> &
  RadioGroupComponentProps

export type RadioGroupContextType = AetherProps<typeof RadioGroupStyleContext> &
  RadioGroupComponentProps & {
    selectedValue?: string | null
    setSelectedValue?: (value: string | null) => void
  }

/* --- Context --------------------------------------------------------------------------------- */

export const RadioGroupContext = createContext<RadioGroupContextType>({
  selectedValue: null,
  setSelectedValue: undefined,
  radioColor: undefined,
  radioBorderClasses: undefined,
  radioIndicatorClasses: undefined,
  labelClasses: undefined,
  pressableWrapperProps: undefined,
  radioBorderViewProps: undefined,
  radioIndicatorViewProps: undefined,
  labelTextProps: undefined,
})
