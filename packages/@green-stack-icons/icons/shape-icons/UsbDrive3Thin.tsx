import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <UsbDrive3Thin/> ------------------------------------------------------------------------ */

export const UsbDrive3Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path stroke={fill} d="M6 2h12v6H6V2Z" clipRule="evenodd" />
    <Path stroke={fill} d="M9 5h2M13 5h2" />
    <Path stroke={fill} d="M5 8h14v7a7 7 0 1 1-14 0V8Z" clipRule="evenodd" />
    <Path stroke={fill} strokeLinecap="round" strokeLinejoin="round" d="m9 15 2.5 2 3.5-5" />
  </Svg>
)
