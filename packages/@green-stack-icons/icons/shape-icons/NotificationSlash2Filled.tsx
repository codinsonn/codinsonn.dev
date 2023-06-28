import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <NotificationSlash2Filled/> ------------------------------------------------------------- */

export const NotificationSlash2Filled = ({
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
      fill={fill}
      d="M12 22c-1.93 0-3.5-1.57-3.5-3.5V18h7v.5c0 1.93-1.57 3.5-3.5 3.5Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M5.202 7.323A7.032 7.032 0 0 0 5 9v2.88c0 1.39-.33 2.77-.95 4.02L3 18h12.879L5.202 7.323ZM20.122 18H21l-1.05-2.1a9.068 9.068 0 0 1-.95-4.02V9c0-3.87-3.13-7-7-7a6.983 6.983 0 0 0-5.371 2.508L20.12 18ZM1.47 1.47a.75.75 0 0 1 1.06 0l20 20a.75.75 0 1 1-1.06 1.06l-20-20a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </Svg>
)

