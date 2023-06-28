import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Rounded3Filled/> ----------------------------------------------------------------------- */

export const Rounded3Filled = ({
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
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M9.2 6.5h3.2c2.7 0 3.9 3.9-.4 5.1M8.3 15.9c.2.3.4.6.8.8.9.7 1.9.8 2.5.8.8 0 1.9.1 2.8-.6.8-.6 1.7-1.9 1.3-3.3-.4-1.3-1.9-2.3-3.6-2"
    />
  </Svg>
)

