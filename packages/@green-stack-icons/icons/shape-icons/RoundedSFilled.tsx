import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <RoundedSFilled/> ----------------------------------------------------------------------- */

export const RoundedSFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M8.3 16.2c.4.7 1.2 1.2 2.2 1.2h2.3c1.6 0 2.9-1.3 2.9-2.9 0-1.6-1.3-3-3-3H11c-1.4 0-2.5-1.1-2.5-2.5S9.6 6.5 11 6.5h2c1.1 0 1.9.5 2.3 1.5"
    />
  </Svg>
)
