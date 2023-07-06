import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <SlackThin/> ---------------------------------------------------------------------------- */

export const SlackThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M22 8.5c0 .83-.67 1.5-1.5 1.5H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5ZM14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5ZM8.5 2c.83 0 1.5.67 1.5 1.5V5H8.5C7.67 5 7 4.33 7 3.5S7.67 2 8.5 2ZM10 9.5c0 .83-.67 1.5-1.5 1.5h-5C2.67 11 2 10.33 2 9.5S2.67 8 3.5 8h5c.83 0 1.5.67 1.5 1.5ZM2 15.5c0-.83.67-1.5 1.5-1.5H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5ZM9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5ZM15.5 22c-.83 0-1.5-.67-1.5-1.5V19h1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5ZM14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5Z"
    />
  </Svg>
)
