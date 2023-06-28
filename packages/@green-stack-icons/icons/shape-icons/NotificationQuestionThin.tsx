import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <NotificationQuestionThin/> ------------------------------------------------------------- */

export const NotificationQuestionThin = ({
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
    <Path d="M13.58 5.22c.27-.34.42-.76.42-1.22 0-1.1-.9-2-2-2s-2 .9-2 2c0 .46.15.88.42 1.22" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M13.58 5.22c.27-.34.42-.76.42-1.22 0-1.1-.9-2-2-2s-2 .9-2 2c0 .46.15.88.42 1.22M14.45 19h-4.9a2.5 2.5 0 1 0 4.95.5c0-.17-.02-.34-.05-.5Z"
    />
    <Path d="M17.99 11c-.1-2.69-1.91-5.06-4.41-5.78-.44-.13-.91-.21-1.4-.22-.61-.02-1.2.06-1.76.22A5.982 5.982 0 0 0 6 11v2.04c0 .63-.12 1.26-.36 1.85L4 19h11" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17.99 11c-.1-2.69-1.91-5.06-4.41-5.78-.44-.13-.91-.21-1.4-.22-.61-.02-1.2.06-1.76.22A5.982 5.982 0 0 0 6 11v2.04c0 .63-.12 1.26-.36 1.85L4 19h11M18 22h.01"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M16 16.04c.04-.29.16-.83.56-1.31.1-.13.29-.36.62-.53.4-.2.76-.2.92-.2.18 0 .61.02 1.05.31.54.36.71.88.76 1.04.03.08.19.61 0 1.21-.11.38-.31.62-.48.83-.7.83-1.32.76-1.43 1.3-.01.02 0 .13 0 .31"
    />
  </Svg>
)

