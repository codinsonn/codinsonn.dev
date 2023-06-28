import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <CropRotateThin/> ----------------------------------------------------------------------- */

export const CropRotateThin = ({
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
      strokeMiterlimit={10}
      d="M5 8h3V5M19 16h-3v3M16 16H9c-.55 0-1-.45-1-1V8h7c.55 0 1 .45 1 1v7Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 3h4c1.66 0 3 1.34 3 3v1"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      d="m19.41 7.01.59.58.59-.58h-1.18Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 21H7c-1.66 0-3-1.34-3-3v-1"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      d="M4.59 16.99 4 16.41l-.59.58h1.18Z"
    />
  </Svg>
)

