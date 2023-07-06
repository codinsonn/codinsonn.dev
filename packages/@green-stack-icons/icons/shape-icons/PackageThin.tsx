import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <PackageThin/> -------------------------------------------------------------------------- */

export const PackageThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 12 4 8v9l8 4v-9ZM12 21l8-4V8l-8 4v9Z"
    />
    <Path stroke={fill} strokeLinecap="round" strokeLinejoin="round" d="M12 4 4 8l8 4 8-4-8-4Z" />
  </Svg>
)
