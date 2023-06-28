import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <AirbnbFilled/> ------------------------------------------------------------------------- */

export const AirbnbFilled = ({
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
      d="M6.98 22c1.38 0 2.79-.9 3.84-1.96L11.85 19l1.04 1.04C13.94 21.1 15.34 22 16.73 22c8.99 0 1.61-11.37-2.38-18.53-1.1-1.96-3.91-1.96-5 0C5.14 11-1.23 22 6.98 22Z"
    />
    <Path
      fill={fill}
      d="M14.35 12.47c0 1.37-1.12 6.53-2.5 6.53s-2.5-5.16-2.5-6.53c0-1.36 1.12-2.47 2.5-2.47 1.39 0 2.5 1.11 2.5 2.47Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M14.35 12.47c0 1.37-1.12 6.53-2.5 6.53s-2.5-5.16-2.5-6.53c0-1.36 1.12-2.47 2.5-2.47 1.39 0 2.5 1.11 2.5 2.47Z"
    />
  </Svg>
)

