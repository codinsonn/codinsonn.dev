import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <BalanceScaleThin/> --------------------------------------------------------------------- */

export const BalanceScaleThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 20V7.5M8 20h8M7.5 13 5 6l-2.5 7"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M2 13c0 1.66 1.34 3 3 3s3-1.34 3-3H2Z"
    />
    <Path stroke={fill} strokeLinecap="round" strokeLinejoin="round" d="M21.5 13 19 6l-2.5 7" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M16 13c0 1.66 1.34 3 3 3s3-1.34 3-3h-6Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 6h-6.5M10.5 6H4M12 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </Svg>
)
