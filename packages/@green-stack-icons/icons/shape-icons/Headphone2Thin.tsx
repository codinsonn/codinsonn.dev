import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Headphone2Thin/> ----------------------------------------------------------------------- */

export const Headphone2Thin = ({
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
      d="M19 12c0-5.5-3-8-7-8s-7 2.5-7 8M17 20h2.5a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 0-2.5-2.5H17v8ZM7 20H4.5A2.5 2.5 0 0 1 2 17.5v-3A2.5 2.5 0 0 1 4.5 12H7v8Z"
    />
  </Svg>
)

