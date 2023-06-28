import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <PasteFilled/> -------------------------------------------------------------------------- */

export const PasteFilled = ({
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
      d="M20 5c0-.55-.45-1-1-1h-3v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V4H5c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V5Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M10 4c0-1.102.898-2 2-2 1.102 0 2 .898 2 2h-4Z"
      clipRule="evenodd"
    />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      d="M16 4v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V4"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M8 4h8v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V4Z"
      clipRule="evenodd"
    />
  </Svg>
)

