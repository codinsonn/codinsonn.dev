import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <MusicThin/> ---------------------------------------------------------------------------- */

export const MusicThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17.5 19a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM6.5 22a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM20 2v14.5M9 5v14.5M9 5l11-3"
    />
  </Svg>
)
