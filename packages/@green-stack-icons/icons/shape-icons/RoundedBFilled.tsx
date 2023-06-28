import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <RoundedBFilled/> ----------------------------------------------------------------------- */

export const RoundedBFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    {...svgProps}
  >
    <Path
      fill={fill}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <Path
      fill={fill}
      d="M12.7 11.1H7.8V6.6h4.8c1.1 0 2.1.9 2.1 2.1V9c0 1.2-.9 2.1-2 2.1Z"
    />
    <Path
      fill={fill}
      d="M14.5 17.4H7.8v-6.3h6.7c1.6 0 2.9 1.3 2.9 2.9v.5c0 1.6-1.3 2.9-2.9 2.9Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12.7 11.1H7.8V6.6h4.8c1.1 0 2.1.9 2.1 2.1V9c0 1.2-.9 2.1-2 2.1Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M14.5 17.4H7.8v-6.3h6.7c1.6 0 2.9 1.3 2.9 2.9v.5c0 1.6-1.3 2.9-2.9 2.9Z"
    />
  </Svg>
)

