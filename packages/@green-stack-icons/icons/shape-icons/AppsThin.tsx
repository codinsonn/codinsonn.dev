import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <AppsThin/> ----------------------------------------------------------------------------- */

export const AppsThin = ({
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
      d="M11.998 12H3V5c0-1.1.9-2 2-2h6.998v9ZM11.998 21H4.999C3.9 21 3 20.1 3 19v-7h8.998v9Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M18.996 21h-6.998v-9h8.997v7c0 1.1-.9 2-2 2Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m15.587 11.41-3-3c-.78-.78-.78-2.05 0-2.83l3-3c.78-.78 2.05-.78 2.829 0l3 3c.779.78.779 2.05 0 2.83l-3 3c-.79.78-2.06.78-2.83 0Z"
    />
  </Svg>
)

