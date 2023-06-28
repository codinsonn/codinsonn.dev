import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Map2Thin/> ----------------------------------------------------------------------------- */

export const Map2Thin = ({
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
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 2v16l7 4V6l-7-4Z"
    />
    <Path d="m8 6 7-4v16l-7 4-6-4V2l6 4 7-4-7 4Z" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8 6 7-4v16l-7 4-6-4V2l6 4Zm0 0 7-4"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 12V6l7-4v16"
    />
  </Svg>
)

