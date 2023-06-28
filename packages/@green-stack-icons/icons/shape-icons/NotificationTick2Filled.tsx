import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <NotificationTick2Filled/> -------------------------------------------------------------- */

export const NotificationTick2Filled = ({
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
      d="M12 22c-1.93 0-3.5-1.57-3.5-3.5V18h7v.5c0 1.93-1.57 3.5-3.5 3.5ZM4.05 15.9 3 18h18l-1.05-2.1a9.068 9.068 0 0 1-.95-4.02V9c0-3.87-3.13-7-7-7S5 5.13 5 9v2.88c0 1.39-.33 2.77-.95 4.02Z"
    />
    <Path
      stroke={stroke}
      strokeMiterlimit={10}
      d="m8.6 9.23 2.55 2.55 4.25-4.25"
    />
  </Svg>
)

