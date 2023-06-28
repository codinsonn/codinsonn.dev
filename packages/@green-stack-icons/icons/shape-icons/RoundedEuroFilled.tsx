import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <RoundedEuroFilled/> -------------------------------------------------------------------- */

export const RoundedEuroFilled = ({
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
      d="M16.3 16.2c-.9.9-2.1 1.4-3.4 1.4-2.9 0-5.2-2.5-5.2-5.6 0-3.1 2.3-5.6 5.2-5.6 1.3 0 2.5.5 3.4 1.4M6 10.8h6.5M6 13.2h6.5"
    />
  </Svg>
)

