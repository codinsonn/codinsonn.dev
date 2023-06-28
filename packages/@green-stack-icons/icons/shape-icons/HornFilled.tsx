import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <HornFilled/> --------------------------------------------------------------------------- */

export const HornFilled = ({
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
    <Path fill={fill} d="M19 8v6c1.66 0 3-1.34 3-3s-1.34-3-3-3Z" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 8v6"
    />
    <Path fill={fill} d="M19 19 9 14V8l10-5v16Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M2 11c0 2.21 1.79 4 4 4v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7H6c-2.21 0-4 1.79-4 4Z"
      clipRule="evenodd"
    />
  </Svg>
)

