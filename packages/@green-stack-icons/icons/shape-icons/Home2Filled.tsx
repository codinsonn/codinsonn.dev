import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Home2Filled/> -------------------------------------------------------------------------- */

export const Home2Filled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="m10.28 2.56-7 5.07A3.14 3.14 0 0 0 2 10.17v8.73C2 20.61 3.34 22 5 22h14c1.66 0 3-1.39 3-3.1v-8.73c0-1.01-.48-1.96-1.28-2.54l-7-5.07a2.91 2.91 0 0 0-3.44 0Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M16 13c0 2.21-1.79 4-4 4s-4-1.79-4-4"
    />
  </Svg>
)
