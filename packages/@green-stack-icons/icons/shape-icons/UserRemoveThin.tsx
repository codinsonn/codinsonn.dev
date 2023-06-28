import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <UserRemoveThin/> ----------------------------------------------------------------------- */

export const UserRemoveThin = ({
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
      d="M12 17c0-2.25 1.5-4.13 3.54-4.76A8.95 8.95 0 0 0 11 11a9 9 0 0 0-9 9h11.02A4.98 4.98 0 0 1 12 17ZM11 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
    <Path
      stroke={fill}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M14 17h6"
    />
  </Svg>
)

