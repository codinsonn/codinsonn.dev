import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ZoomOutFilled/> ------------------------------------------------------------------------ */

export const ZoomOutFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M13.585 15.702a1 1 0 0 1 0-1.414l.707-.707a1 1 0 0 1 1.415 0l6.003 6.003a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414 0l-6.004-6.003Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
    <Path stroke={stroke} strokeLinejoin="round" d="M5 10h10" />
  </Svg>
)
