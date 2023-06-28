import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <ServerWarningThin/> -------------------------------------------------------------------- */

export const ServerWarningThin = ({
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
      d="M17 22a5.002 5.002 0 0 1-4.9-6H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h13ZM21.32 14.49A4.988 4.988 0 0 0 17 12c-2.05 0-3.81 1.24-4.59 3H4c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v2c0 .59-.26 1.13-.68 1.49Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 8H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2ZM22 8H2v1h20V8Z"
    />
    <Path
      stroke={fill}
      strokeLinejoin="round"
      d="M5 4v2M8 4v2M5 11v2M8 11v2M5 18v2M8 18v2"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12.1 16c.07-.35.18-.68.31-1H2v1h10.1Z"
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
      d="M17 14v3"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17 19h.01"
    />
  </Svg>
)

