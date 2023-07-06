import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <CampingTentThin/> ---------------------------------------------------------------------- */

export const CampingTentThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m11.52 14 2.22-3.75H12l2.63-3.64h-1.18L16.17 2l2.72 4.61h-1.18l2.63 3.64H18.6L22 16h-3l-1-2h-6.48ZM6 14h4.16L8.03 8.74h1.1L6.59 4.28 4.06 8.74h1.1l-1.4 3.28L2 15.97l3.01.01L6 14Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M10 22h12l-4-8H6l4 8Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m10 22-4-8-4 8h8Z"
    />
  </Svg>
)
