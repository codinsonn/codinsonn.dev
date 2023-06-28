import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <UserAddCircleThin/> -------------------------------------------------------------------- */

export const UserAddCircleThin = ({
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
      d="M22 12c0 1.02-.15 2.01-.44 2.94A5.013 5.013 0 0 0 17 12c-2.76 0-5 2.24-5 5 0 2.03 1.21 3.77 2.94 4.56-.93.29-1.92.44-2.94.44-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M14.93 21.55A5 5 0 0 1 12 17c0-1.1.35-2.11.96-2.94a8.002 8.002 0 0 0-8.29 4.73C6.5 20.76 9.1 22 12 22c1.02 0 2-.15 2.93-.45Z"
    />
    <Path d="M13.12 13.84h.01c.55-.68 1.29-1.22 2.13-1.53.47-.66.74-1.45.74-2.31 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.39 0 .77-.06 1.13-.16" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M13.12 13.84h.01c.55-.68 1.29-1.22 2.13-1.53.47-.66.74-1.45.74-2.31 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.39 0 .77-.06 1.13-.16"
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
      d="M14 17h6M17 14v6"
    />
  </Svg>
)

