import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Calendar3Thin/> ------------------------------------------------------------------------ */

export const Calendar3Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M21 22H3c-.55 0-1-.45-1-1v-9h20v9c0 .55-.45 1-1 1Z"
    />
    <Path d="M17 5h4c.55 0 1 .45 1 1v6H2V6c0-.55.45-1 1-1h4" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17 5h4c.55 0 1 .45 1 1v6H2V6c0-.55.45-1 1-1h4M14 5h-4"
    />
    <Path
      stroke={fill}
      strokeMiterlimit={10}
      d="M15.5 8c-.83 0-1.5-.67-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5ZM8.5 8C7.67 8 7 7.33 7 6.5v-3C7 2.67 7.67 2 8.5 2s1.5.67 1.5 1.5v3C10 7.33 9.33 8 8.5 8Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17.5 19h1M13.5 19h1M9.5 19h1M5.5 19h1M17.5 15h1M13.5 15h1M9.5 15h1M5.5 15h1"
    />
  </Svg>
)
