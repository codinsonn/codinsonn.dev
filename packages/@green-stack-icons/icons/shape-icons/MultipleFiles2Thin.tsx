import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <MultipleFiles2Thin/> ------------------------------------------------------------------- */

export const MultipleFiles2Thin = ({
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
      d="M6 6H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3H7c-.55 0-1-.45-1-1V6Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M21 18H7c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h10.59c.27 0 .52.11.71.29l3.41 3.41c.18.19.29.45.29.71V17c0 .55-.45 1-1 1ZM18 14h-8M10 10h8M10 6h3"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17 2v5h5v-.59c0-.26-.11-.52-.29-.7l-3.42-3.42c-.18-.18-.44-.29-.7-.29H17Z"
    />
  </Svg>
)

