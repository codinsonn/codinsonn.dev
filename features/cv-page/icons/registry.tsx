import React from 'react'
import { registerIconRenderer } from 'aetherspace/utils'
import { AntDesign } from '@expo/vector-icons'
import { ComponentProps } from 'react'

/** --- iconRegistry --------------------------------------------------------------------------- */
/** -i- Register any icons by preferred AetherIcon "name" key */
export const iconRegistry = {
  ...registerIconRenderer(['caretup'] as const, ({ name, size, fill, ...restIconProps }) => (
    <AntDesign
      name={name as ComponentProps<typeof AntDesign>['name']}
      size={size}
      color={fill}
      {...restIconProps}
    />
  )),
} as const
