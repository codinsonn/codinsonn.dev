import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <PasteThin/> ---------------------------------------------------------------------------- */

export const PasteThin = ({
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
      d="M17 4h2c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2"
      clipRule="evenodd"
    />
    <Path
      stroke={fill}
      strokeLinejoin="round"
      d="M17 4h2c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      d="M13 5h-2V3c0-.55.45-1 1-1s1 .45 1 1v2Z"
      clipRule="evenodd"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 4H9v1h6V4Z"
    />
  </Svg>
)

