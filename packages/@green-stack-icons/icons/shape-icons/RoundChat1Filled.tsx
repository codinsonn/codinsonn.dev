import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <RoundChat1Filled/> --------------------------------------------------------------------- */

export const RoundChat1Filled = ({
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
      d="M12 2C6.48 2 2 5.58 2 10c0 2.61 1.58 4.93 4 6.39V22l4.14-4.14c.61.09 1.22.14 1.86.14 5.52 0 10-3.58 10-8s-4.48-8-10-8Z"
    />
  </Svg>
)

