import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Remove5Thin/> -------------------------------------------------------------------------- */

export const Remove5Thin = ({
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
      d="M18 5v1H9C7.34 6 6 7.34 6 9v9H5c-1.66 0-3-1.34-3-3V5c0-1.66 1.34-3 3-3h10c1.66 0 3 1.34 3 3Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M19 22H9c-1.66 0-3-1.34-3-3V9c0-1.66 1.34-3 3-3h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3Z"
    />
    <Path
      stroke={fill}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M9 14h10"
    />
  </Svg>
)

