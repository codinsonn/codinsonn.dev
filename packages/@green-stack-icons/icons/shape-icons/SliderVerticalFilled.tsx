import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <SliderVerticalFilled/> ----------------------------------------------------------------- */

export const SliderVerticalFilled = ({
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
      d="M4 13V1h2v12H4ZM4 23v-6h2v6H4ZM18 13V1h2v12h-2ZM18 23v-6h2v6h-2ZM11 23V11h2v12h-2ZM11 7V1h2v6h-2Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M2 18v-3h6v3H2ZM16 18v-3h6v3h-6ZM15 6v3H9V6h6Z"
      clipRule="evenodd"
    />
  </Svg>
)

