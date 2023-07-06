import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <MailOpenFilled/> ----------------------------------------------------------------------- */

export const MailOpenFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path fill={fill} d="m12 15 10-6v11c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9l10 6Z" />
    <Path fill={fill} d="m12 2 10 7-10 6L2 9l10-7Z" />
    <Path stroke={stroke} strokeLinecap="round" strokeMiterlimit={10} d="m2 9 10 6 10-6" />
  </Svg>
)
