import React, { ComponentProps } from 'react'
import { Pressable, View, Text } from '../../primitives'
// Types
import { stylePropDescription } from 'aetherspace/schemas/ats'
// Schemas
import { z, aetherSchema, AetherProps } from 'aetherspace/schemas'
// Components
import { AetherIcon, AetherIconKeyProp } from '../../components'

/* --- Schema ---------------------------------------------------------------------------------- */

// Descriptions
const d = {
  tw: `${stylePropDescription}\n\nProviding your own classes will omit all the default tailwind classes ➡️`,
  checkedIconName: `Icon name, from the list available on the 'AetherIcon' component`,
  checkedIconFill: `Icon fill color when checked`,
  checkColor: `Checkbox fill or border color`,
  checked: `Whether the checkbox is checked or not`,
  label: `Checkbox label text, can also just provide a string or Text component as a child`,
}

// Docs
export const AetherCheckboxBaseProps = aetherSchema('AetherCheckboxBaseProps', {
  checkboxClasses: z.string().default('w-[16px] h-[16px] border-[1px] border-solid rounded-[3px] mr-2 items-center justify-center').describe(d.tw), // prettier-ignore
  labelClasses: z.string().default('font-primary text-[14px] leading-[18px]').describe(d.tw),
  checkedIconName: AetherIconKeyProp.default('check-filled').describe(d.checkedIconName),
  checkedIconFill: z.string().color().default('#FFFFFF').describe(d.checkedIconFill),
  checkColor: z.string().color().default('#333333').describe(d.checkColor),
  checked: z.boolean().default(false).describe(d.checked),
  label: z.string().default('Checkbox label').describe(d.label),
})

// Types
export type TAetherCheckboxProps = AetherProps<typeof AetherCheckboxBaseProps> & {
  children: React.ReactNode
  onChange?: (checked: boolean) => void
  pressableWrapperProps?: ComponentProps<typeof Pressable>
  checkboxViewProps?: ComponentProps<typeof View>
  checkboxIconProps?: ComponentProps<typeof AetherIcon>
  labelTextProps?: ComponentProps<typeof Text>
}

/* --- <AetherCheckbox/> ----------------------------------------------------------------------- */

const AetherCheckbox = (props: TAetherCheckboxProps) => {
  // Props
  const {
    checked,
    label,
    children,
    onChange,
    checkedIconName,
    checkedIconFill,
    checkColor,
    checkboxClasses,
    labelClasses,
    pressableWrapperProps,
    checkboxViewProps,
    checkboxIconProps,
    labelTextProps,
  } = AetherCheckboxBaseProps.applyDefaults(props)

  // Vars
  const checkboxLabel = typeof children === 'string' ? children : label

  // -- Styles --

  const currentCheckboxClasses = [
    checked ? `bg-[${checkColor}]` : `border-[${checkColor}]`,
    checkboxClasses,
  ].flat().filter(Boolean).join(' ') // prettier-ignore

  // -- Render --

  return (
    <Pressable
      tw="flex-row items-center"
      accessibilityRole="checkbox"
      onPress={() => onChange && onChange(!checked)}
      {...pressableWrapperProps}
    >
      <View tw={currentCheckboxClasses} {...checkboxViewProps}>
        {checked && (
          <AetherIcon
            name={checkedIconName}
            fill={checkboxIconProps?.fill || checkedIconFill}
            size={checkboxIconProps?.size || 12}
            {...checkboxIconProps}
          />
        )}
      </View>
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

AetherCheckbox.displayName = 'AetherCheckbox'

/* --- Docs ------------------------------------------------------------------------------------ */

export const getDocumentationProps = AetherCheckboxBaseProps.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default AetherCheckbox
