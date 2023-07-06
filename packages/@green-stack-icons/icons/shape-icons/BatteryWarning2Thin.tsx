import * as React from 'react'
import Svg, { Rect, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <BatteryWarning2Thin/> ------------------------------------------------------------------ */

export const BatteryWarning2Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Rect width={18} height={12} x={2} y={6} stroke={fill} strokeLinejoin="round" rx={2} />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M22 10.5v3M11 9v3M11 14.99V15"
    />
  </Svg>
)
