import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Password2Filled/> ---------------------------------------------------------------------- */

export const Password2Filled = ({
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
      d="M7.1 8h9.8A5.007 5.007 0 0 0 12 4a5.007 5.007 0 0 0-4.9 4ZM5 9c0-3.862 3.138-7 7-7s7 3.138 7 7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M19 22H5c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1Z"
      clipRule="evenodd"
    />
    <Path
      stroke={stroke}
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m9.17 12.17 5.66 5.66M12 11v8M14.83 12.17l-5.66 5.66M16 15H8"
    />
  </Svg>
)

