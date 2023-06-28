import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Notification3Thin/> -------------------------------------------------------------------- */

export const Notification3Thin = ({
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
      strokeMiterlimit={10}
      d="M18 11.9A5.002 5.002 0 0 1 12.1 6H5C3.34 6 2 7.34 2 9v10c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3v-7.1Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
  </Svg>
)

