import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <SecuritySuccessFilled/> ---------------------------------------------------------------- */

export const SecuritySuccessFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M4 3.111 12 2l8 1.111v9.15a8 8 0 0 1-3.437 6.57L12 22l-4.563-3.169A8 8 0 0 1 4 12.261V3.11Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m16 9-4.85 5L9 11.79"
    />
  </Svg>
)
