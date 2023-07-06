import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Timeline2Thin/> ------------------------------------------------------------------------ */

export const Timeline2Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path stroke={fill} strokeLinecap="round" strokeLinejoin="round" d="m21 7-6 10-7-9-5 7" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM21 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </Svg>
)
