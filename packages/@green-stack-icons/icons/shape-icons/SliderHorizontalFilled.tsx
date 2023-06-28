import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <SliderHorizontalFilled/> --------------------------------------------------------------- */

export const SliderHorizontalFilled = ({
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
      fillRule="evenodd"
      d="M11 4h12v2H11V4ZM1 4h6v2H1V4ZM11 18h12v2H11v-2ZM1 18h6v2H1v-2ZM1 11h12v2H1v-2ZM17 11h6v2h-6v-2Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M6 2h3v6H6V2ZM6 16h3v6H6v-6ZM18 15h-3V9h3v6Z"
      clipRule="evenodd"
    />
  </Svg>
)

