import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <MailSuccessFilled/> -------------------------------------------------------------------- */

export const MailSuccessFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path fill={fill} d="M20 12h-8v5H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v8Z" />
    <Path fill={fill} d="m20 4-9 5-9-5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2ZM22 12H12v10h10V12Z" />
    <Path stroke={stroke} strokeLinecap="round" strokeMiterlimit={10} d="m20 4-9 5-9-5" />
    <Path stroke={stroke} strokeMiterlimit={10} d="m14.6 16.35 1.8 1.8 3-3" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M22 12H12v10h10V12Z"
    />
  </Svg>
)
