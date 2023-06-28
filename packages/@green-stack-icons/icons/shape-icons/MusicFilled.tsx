import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <MusicFilled/> -------------------------------------------------------------------------- */

export const MusicFilled = ({
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
      d="M17.5 19a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM6.5 22a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M17.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM14 16.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM6.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM3 19.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M20 1a1 1 0 0 1 1 1v14.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM9 4a1 1 0 0 1 1 1v14.5a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M20.965 1.737a1 1 0 0 1-.702 1.228l-11 3a1 1 0 1 1-.526-1.93l11-3a1 1 0 0 1 1.228.702Z"
      clipRule="evenodd"
    />
  </Svg>
)

