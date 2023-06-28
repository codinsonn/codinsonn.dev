import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <NotificationPopUpThin/> ---------------------------------------------------------------- */

export const NotificationPopUpThin = ({
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
      d="M11 22c-1.93 0-3.5-1.57-3.5-3.5V18h7v.5c0 1.93-1.57 3.5-3.5 3.5ZM20 18H2l1.05-2.1c.62-1.25.95-2.63.95-4.02V9c0-1.94.78-3.68 2.05-4.95A6.958 6.958 0 0 1 11 2c1.18 0 2.29.29 3.27.81A5.002 5.002 0 0 0 18 11.9c0 1.38.33 2.76.95 4L20 18Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
  </Svg>
)

