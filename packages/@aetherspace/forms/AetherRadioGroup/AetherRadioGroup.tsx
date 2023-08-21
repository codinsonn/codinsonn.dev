import React, { useState, ComponentProps } from 'react'
import { Pressable, View, Text } from '../../primitives'
// Types
import { stylePropDescription } from 'aetherspace/schemas/ats'
// Schemas
import { z, aetherSchema, AetherProps } from 'aetherspace/schemas'
// Components
import AetherRadioOption from './AetherRadioOption'

/* --- Schema ---------------------------------------------------------------------------------- */

// Descriptions
const d = {
  tw: `${stylePropDescription}\n\nProviding your own classes will omit all the default tailwind classes ➡️`,
  options: `Array of radio options`,
  value: `Selected current radio group value`,
  radioSpacing: `Amount of space between radio options in pixels`,
  radioColor: `Radio fill and border color`,
  label: `Radio label text, can also just provide a string or Text component as a child`,
}

// Docs
export const AetherRadioGroupBaseProps = aetherSchema('AetherRadioGroupBaseProps', {
  value: z.string().describe(d.value).eg('value-1'),
  options: aetherSchema('AetherRadioGroupOption', {
        value: z.string().describe(d.value),
        label: z.string().default('Option label').describe(d.label),
    }).array().default([]).eg([
        { value: 'value-1', label: 'option 1' },
        { value: 'value-2', label: 'option 2' },
        { value: 'value-3', label: 'option 3' },
    ]), // prettier-ignore
  radioSpacing: z.number().default(8).describe(d.radioSpacing),
  radioColor: z.string().color().default('#333333').describe(d.radioColor),
  radioGroupClasses: z.string().default('flex flex-col').describe(d.tw),
  radioBorderClasses: z.string().default('w-[16px] h-[16px] border-[1px] border-solid rounded-full mr-2 items-center justify-center').describe(d.tw), // prettier-ignore
  radioIndicatorClasses: z.string().default('w-[8px] h-[8px] rounded-full').describe(d.tw),
  labelClasses: z.string().default('font-primary text-[14px] leading-[18px]').describe(d.tw),
})

// Types
export type TAetherRadioGroupProps = AetherProps<typeof AetherRadioGroupBaseProps> & {
  children?: React.ReactNode
  onChange: (value: string) => void
  pressableWrapperProps?: ComponentProps<typeof Pressable>
  radioBorderViewProps?: ComponentProps<typeof View>
  radioIndicatorViewProps?: ComponentProps<typeof View>
  labelTextProps?: ComponentProps<typeof Text>
}

/* --- <AetherRadioGroup/> --------------------------------------------------------------------- */

const AetherRadioGroup = (props: TAetherRadioGroupProps) => {
  // Props
  const {
    value,
    options,
    onChange,
    radioSpacing,
    radioGroupClasses,
    children,
    ...aetherRadioOptionConfig
  } = AetherRadioGroupBaseProps.applyDefaults(props)

  // State
  const [selectedValue, setSelectedValue] = useState<string | null>(value)

  // -- Handlers --

  const onValueChange = (value: string) => {
    const newValue = value === selectedValue ? null : value
    setSelectedValue(newValue)
    if (selectedValue !== null) onChange?.(value)
  }

  // -- Render --

  return (
    <View tw={radioGroupClasses}>
      {children}
      {options.map((option, i) => (
        <>
          {!!i && <View tw={`h-[${radioSpacing}px]`} />}
          <AetherRadioOption
            key={option.value}
            {...aetherRadioOptionConfig}
            selected={option.value === selectedValue}
            value={option.value}
            label={option.label}
            onChange={() => onValueChange(option.value)}
          />
        </>
      ))}
    </View>
  )
}

/* --- Docs ------------------------------------------------------------------------------------ */

export const getDocumentationProps = AetherRadioGroupBaseProps.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default AetherRadioGroup
