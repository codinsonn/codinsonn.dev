import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Timeline2Filled/> ---------------------------------------------------------------------- */

export const Timeline2Filled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M21.515 6.143a1 1 0 0 1 .343 1.372l-6 10a1 1 0 0 1-1.647.099L8.034 9.673l-4.22 5.908a1 1 0 0 1-1.628-1.162l5-7a1 1 0 0 1 1.603-.033l6.104 7.848 5.25-8.748a1 1 0 0 1 1.372-.343Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M1 15a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM6 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM13 17a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM19 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      clipRule="evenodd"
    />
  </Svg>
)
