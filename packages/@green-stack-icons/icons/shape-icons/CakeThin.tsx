import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <CakeThin/> ----------------------------------------------------------------------------- */

export const CakeThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M16 12H8V4.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5V12ZM19 20H5v-7.5c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5V20ZM2 20h20"
    />
    <Path
      stroke={fill}
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M5 14.48c1.4 0 1.4 2.21 2.8 2.21s1.4-2.21 2.8-2.21 1.4 2.21 2.8 2.21 1.4-2.21 2.8-2.21 1.4 2.21 2.8 2.21M8 8.66c1.33 0 1.33-2.21 2.66-2.21S12 8.66 13.33 8.66c1.34 0 1.34-2.21 2.67-2.21"
    />
  </Svg>
)
