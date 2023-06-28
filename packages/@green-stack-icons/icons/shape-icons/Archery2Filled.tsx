import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Archery2Filled/> ----------------------------------------------------------------------- */

export const Archery2Filled = ({
  size = 24,
  fill = '#333333',
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
      d="M18.75 9H15.5a.5.5 0 0 1-.5-.5V5.25a.5.5 0 0 1 .146-.354l2.5-2.5a.5.5 0 0 1 .854.354V5.5h2.75a.5.5 0 0 1 .354.854l-2.5 2.5A.5.5 0 0 1 18.75 9Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M12 3a9 9 0 1 0 9 9 1 1 0 1 1 2 0c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1a1 1 0 1 1 0 2Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M12 7a5 5 0 1 0 5 5 1 1 0 1 1 2 0 7 7 0 1 1-7-7 1 1 0 1 1 0 2Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M11.293 12.707a1 1 0 0 0 1.414 0l8-8a1 1 0 0 0-1.414-1.414l-8 8a1 1 0 0 0 0 1.414Z"
      clipRule="evenodd"
    />
  </Svg>
)

