import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Wrench4Filled/> ------------------------------------------------------------------------ */

export const Wrench4Filled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M17.29 11H6.71A1.9 1.9 0 0 1 7 12c0 .364-.097.706-.268 1h10.535A1.992 1.992 0 0 1 17 12c0-.364.109-.706.29-1Z"
    />
    <Path
      fill={fill}
      d="M7 12a2 2 0 1 1-4 0c0-1.105 1-2 2-2s2 .895 2 2ZM21 12a2 2 0 1 1-4 0c0-1.105 1-2 2-2s2 .895 2 2Z"
    />
  </Svg>
)
