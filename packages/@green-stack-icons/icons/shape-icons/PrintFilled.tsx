import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <PrintFilled/> -------------------------------------------------------------------------- */

export const PrintFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
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
      d="M19 7H5V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v4Z"
      clipRule="evenodd"
    />
    <Path stroke={stroke} strokeMiterlimit={10} d="M2 7h20" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M18 17v-3H6v3H2V7h20v10h-4Z"
      clipRule="evenodd"
    />
    <Path stroke={stroke} strokeMiterlimit={10} d="M4 10h3M2 17h4v-3h12v3h4" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M17 22H7c-.55 0-1-.45-1-1v-7h12v7c0 .55-.45 1-1 1Z"
      clipRule="evenodd"
    />
  </Svg>
)

