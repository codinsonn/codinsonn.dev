import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Rotation2Filled/> ---------------------------------------------------------------------- */

export const Rotation2Filled = ({
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
    <Path fill={fill} d="M10 12h10v10H10V12Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M15 6a1 1 0 0 0-1-1h-4c-3.352 0-6 2.648-6 6a6.14 6.14 0 0 0 1.2 3.6 1 1 0 1 0 1.6-1.2A4.143 4.143 0 0 1 6 11c0-2.248 1.752-4 4-4h4a1 1 0 0 0 1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M10.793 2.293a1 1 0 0 0 0 1.414L13.086 6l-2.293 2.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 0Z"
      clipRule="evenodd"
    />
  </Svg>
)

