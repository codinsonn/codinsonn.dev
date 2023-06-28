import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Cancel4Thin/> -------------------------------------------------------------------------- */

export const Cancel4Thin = ({
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
      d="M5 6h1v9c0 1.66 1.34 3 3 3h9v1c0 1.66-1.34 3-3 3H5c-1.66 0-3-1.34-3-3V9c0-1.66 1.34-3 3-3Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M22 5v10c0 1.66-1.34 3-3 3H9c-1.66 0-3-1.34-3-3V5c0-1.66 1.34-3 3-3h10c1.66 0 3 1.34 3 3Z"
    />
    <Path
      stroke={fill}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m10 14 8-8M10 6l8 8"
    />
  </Svg>
)

