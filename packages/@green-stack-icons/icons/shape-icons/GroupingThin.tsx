import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <GroupingThin/> ------------------------------------------------------------------------- */

export const GroupingThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path stroke={fill} strokeLinecap="round" strokeLinejoin="round" d="M15 3H3v12h12V3Z" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <Path stroke={fill} strokeLinecap="round" strokeLinejoin="round" d="M21 9H9v12h12V9Z" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM21 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </Svg>
)
