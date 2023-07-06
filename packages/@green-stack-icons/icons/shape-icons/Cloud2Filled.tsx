import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Cloud2Filled/> ------------------------------------------------------------------------- */

export const Cloud2Filled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M6 11v-.02C6 8 8 5 11.34 5 15 5 17 8 17 11c0 1 0 1-.01.99V12v-.01C17 12 19 12 19 12c1 0 3 1 3 3 0 2.67-2 4-4 4H6c-3 0-4-2-4-4s2-4 4-4Z"
    />
  </Svg>
)
