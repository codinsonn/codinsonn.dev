import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <GoForward10Thin/> ---------------------------------------------------------------------- */

export const GoForward10Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M21 13c0 5-4 9-9 9s-9-4-9-9 4-9 9-9h1"
    />
    <Path stroke={fill} d="m13 4-2-1.25v2.5L13 4Z" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M9 16V9l-1.8 1M7.5 16h3M15.1 16h-.2c-1.1 0-1.9-.9-1.9-1.9v-3.2c0-1.1.9-1.9 1.9-1.9h.2c1.1 0 1.9.9 1.9 1.9v3.2c0 1-.9 1.9-1.9 1.9Z"
    />
  </Svg>
)
