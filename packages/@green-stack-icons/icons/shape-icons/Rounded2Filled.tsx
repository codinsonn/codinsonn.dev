import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Rounded2Filled/> ----------------------------------------------------------------------- */

export const Rounded2Filled = ({
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
      d="M8 8.4c.2-.3.5-.7.9-1 .2-.1 1.4-1.1 2.9-.9 1.7.2 3.1 1.6 3.4 3.1.4 2.2-2.1 4.3-3.6 5.5-1.3 1.1-3.4 2.4-3.4 2.4H16"
    />
  </Svg>
)
