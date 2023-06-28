import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Stop3Filled/> -------------------------------------------------------------------------- */

export const Stop3Filled = ({
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
      d="M17 20H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3Z"
    />
  </Svg>
)

