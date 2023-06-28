import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Logout2Thin/> -------------------------------------------------------------------------- */

export const Logout2Thin = ({
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
    <Path d="M2 8V5c0-1.66 1.34-3 3-3h14c1.66 0 3 1.34 3 3v14c0 1.66-1.34 3-3 3H5c-1.66 0-3-1.34-3-3v-3" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M2 8V5c0-1.66 1.34-3 3-3h14c1.66 0 3 1.34 3 3v14c0 1.66-1.34 3-3 3H5c-1.66 0-3-1.34-3-3v-3"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m10 7-5 5 5 5M18 12H5"
    />
  </Svg>
)

