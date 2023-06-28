import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <SliderHorizontal2Filled/> -------------------------------------------------------------- */

export const SliderHorizontal2Filled = ({
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
      fillRule="evenodd"
      d="M1 12a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM1 5a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM1 19a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M16 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
    <Path
      fill={fill}
      d="M16 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </Svg>
)

