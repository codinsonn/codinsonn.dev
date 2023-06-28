import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <RotationFilled/> ----------------------------------------------------------------------- */

export const RotationFilled = ({
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
    <Path fill={fill} d="M14 12H4v10h10V12Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M9 6a1 1 0 0 1 1-1h4c3.352 0 6 2.648 6 6a6.14 6.14 0 0 1-1.2 3.6 1 1 0 0 1-1.6-1.2c.476-.635.8-1.527.8-2.4 0-2.248-1.752-4-4-4h-4a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M13.207 2.293a1 1 0 0 1 0 1.414L10.914 6l2.293 2.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </Svg>
)

