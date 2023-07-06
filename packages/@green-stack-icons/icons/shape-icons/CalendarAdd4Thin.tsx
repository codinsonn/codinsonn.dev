import * as React from 'react'
import Svg, { Rect, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <CalendarAdd4Thin/> --------------------------------------------------------------------- */

export const CalendarAdd4Thin = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Rect width={20} height={18} x={2} y={4} stroke={fill} strokeLinejoin="round" rx={2} />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M16 2v4M8 2v4"
    />
    <Path fill={stroke} d="M8 13h8Z" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M8 13h8"
    />
    <Path fill={stroke} d="M12 9v8Z" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12 9v8"
    />
  </Svg>
)
