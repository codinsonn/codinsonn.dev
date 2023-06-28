import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <UserVerifiedThin/> --------------------------------------------------------------------- */

export const UserVerifiedThin = ({
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
      d="M16 21H4c-1.1 0-2-.9-2-2 0-2.76 2.24-5 5-5h6c2.76 0 5 2.24 5 5 0 1.1-.9 2-2 2ZM10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM16.5 10.5l2 2L22 9"
    />
  </Svg>
)

