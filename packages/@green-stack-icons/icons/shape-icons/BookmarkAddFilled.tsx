import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <BookmarkAddFilled/> -------------------------------------------------------------------- */

export const BookmarkAddFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path fill={fill} d="m18 22-6-6-6 6V3c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v19Z" />
    <Path stroke={stroke} strokeLinejoin="round" strokeMiterlimit={10} d="M9 8h6M12 5v6" />
  </Svg>
)
