import React, { ComponentProps } from 'react'
import { Pressable, View, Text } from '../../primitives'
// Types
import { stylePropDescription } from 'aetherspace/schemas/ats'
// Schemas
import { z, aetherSchema, AetherProps } from 'aetherspace/schemas'
import { twStyled } from '../../styles'

/* --- Schema ---------------------------------------------------------------------------------- */

// Descriptions
const d = {
  tw: `${stylePropDescription}\n\nProviding your own classes will omit all the default tailwind classes ➡️`,
  radioColor: `Radio fill and border color`,
  selected: `Whether the radio option is checked or not`,
  value: `Selected radio group value`,
  label: `Radio label text, can also just provide a string or Text component as a child`,
}

// Docs
export const AetherRadioOptionBaseProps = aetherSchema('AetherRadioOptionBaseProps', {
  radioBorderClasses: z.string().default('w-[16px] h-[16px] border-[1px] border-solid rounded-full mr-2 items-center justify-center').describe(d.tw), // prettier-ignore
  radioIndicatorClasses: z.string().default('w-[8px] h-[8px] rounded-full').describe(d.tw),
  labelClasses: z.string().default('font-primary text-[14px] leading-[18px]').describe(d.tw),
  radioColor: z.string().color().default('#333333').describe(d.radioColor),
  selected: z.boolean().default(false).describe(d.selected),
  label: z.string().default('Checkbox label').describe(d.label),
  value: z.string().describe(d.value),
})

// Types
export type TAetherRadioOptionProps = AetherProps<typeof AetherRadioOptionBaseProps> & {
  children: React.ReactNode
  onChange?: (checked: boolean) => void
  pressableWrapperProps?: ComponentProps<typeof Pressable>
  radioBorderViewProps?: ComponentProps<typeof View>
  radioIndicatorViewProps?: ComponentProps<typeof View>
  labelTextProps?: ComponentProps<typeof Text>
}

/* --- <AetherRadioOption/> ----------------------------------------------------------------------- */

const AetherRadioOption = (props: TAetherRadioOptionProps) => {
  // Props
  const {
    selected,
    value,
    label,
    children,
    onChange,
    radioColor,
    radioBorderClasses,
    radioIndicatorClasses,
    labelClasses,
    pressableWrapperProps,
    radioBorderViewProps,
    radioIndicatorViewProps,
    labelTextProps,
  } = AetherRadioOptionBaseProps.applyDefaults(props)

  // Vars
  const checkboxLabel = typeof children === 'string' ? children : label

  // -- Styles --

  const allRadioBorderClasses = [`border-[${radioColor}]`, radioBorderClasses].flat().filter(Boolean).join(' ') // prettier-ignore
  const allRadioIndicatorClasses = [`bg-[${radioColor}]`, radioIndicatorClasses].flat().filter(Boolean).join(' ') // prettier-ignore

  // -- Render --

  return (
    <Pressable
      tw="flex-row items-center"
      accessibilityRole="checkbox"
      onPress={() => onChange && onChange(!value)}
      {...pressableWrapperProps}
    >
      <StRadioOptionBorder tw={allRadioBorderClasses} {...radioBorderViewProps}>
        {selected && (
          <StRadioOptionIndicator tw={allRadioIndicatorClasses} {...radioIndicatorViewProps} />
        )}
      </StRadioOptionBorder>
      {checkboxLabel ? (
        <Text tw={labelClasses} {...labelTextProps}>
          {checkboxLabel}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  )
}

AetherRadioOption.displayName = 'AetherRadioOption'

/* --- Styles ---------------------------------------------------------------------------------- */

const StRadioOptionBorder = twStyled(View)``

const StRadioOptionIndicator = twStyled(View)``

/* --- Docs ------------------------------------------------------------------------------------ */

export const getDocumentationProps = AetherRadioOptionBaseProps.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default AetherRadioOption
