import * as React from 'react'
import Svg, { Rect, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <DisplayFilled/> ------------------------------------------------------------------------ */

export const DisplayFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Rect width={12} height={8} x={10} y={11} fill={fill} rx={1} />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M2 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V7H4v6h4a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V6Z"
      clipRule="evenodd"
    />
  </Svg>
)
