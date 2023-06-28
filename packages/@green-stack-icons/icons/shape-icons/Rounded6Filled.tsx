import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Rounded6Filled/> ----------------------------------------------------------------------- */

export const Rounded6Filled = ({
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
      d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10Z"
    />
    <Path
      fill={fill}
      d="M15.4 14.1v.05A3.374 3.374 0 0 1 12 17.5c-1.88 0-3.37-1.47-3.4-3.35v.05c0-1.9 1.5-3.4 3.4-3.4s3.4 1.5 3.4 3.4"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M8.6 14.2v-.05M14.2 7.3c-.6-.5-1.3-.8-2.2-.8-1.9 0-3.4 1.5-3.4 3.4v4.3"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M15.4 14.1v.05A3.374 3.374 0 0 1 12 17.5c-1.88 0-3.37-1.47-3.4-3.35v.05c0-1.9 1.5-3.4 3.4-3.4s3.4 1.5 3.4 3.4"
    />
  </Svg>
)

