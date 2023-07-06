import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <RoundedBitcoinThin/> ------------------------------------------------------------------- */

export const RoundedBitcoinThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM9 17H7.75M9 7H7.75M10.75 7V5M13.25 7.01V5M10.75 19v-2M13.25 19.01V17"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M13.97 12H9v5h4.97c1.68 0 3.03-1.09 3.03-2.44v-.13c0-1.34-1.35-2.43-3.03-2.43ZM12.97 7H9v5h3.97C14.65 12 16 10.91 16 9.56v-.13C16 8.09 14.65 7 12.97 7Z"
    />
  </Svg>
)
