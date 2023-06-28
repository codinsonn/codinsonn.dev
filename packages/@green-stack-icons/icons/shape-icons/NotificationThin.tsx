import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <NotificationThin/> --------------------------------------------------------------------- */

export const NotificationThin = ({
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
      d="M10 18h4a2.5 2.5 0 1 1-4 0ZM10.414 5.212a5.993 5.993 0 0 1 3.172 0A1.94 1.94 0 0 0 14 4c0-1.1-.9-2-2-2s-2 .9-2 2c0 .457.148.874.414 1.212Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m6 14-2 4h16l-2-4v-3c0-3.31-2.69-6-6-6s-6 2.69-6 6v3Z"
    />
  </Svg>
)

