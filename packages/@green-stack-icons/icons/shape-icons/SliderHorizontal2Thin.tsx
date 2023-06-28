import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <SliderHorizontal2Thin/> ---------------------------------------------------------------- */

export const SliderHorizontal2Thin = ({
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
      d="M14 12H2M22 12h-4M16 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM22 5H10M6 5H2M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM22 19H10M6 19H2M8 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </Svg>
)

