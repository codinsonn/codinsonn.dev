import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <RepeatSlashThin/> ---------------------------------------------------------------------- */

export const RepeatSlashThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M6 15H5c-1.7 0-3-1.3-3-3s1.3-3 3-3h7M18 9h1c1.7 0 3 1.3 3 3s-1.3 3-3 3h-7"
    />
    <Path stroke={fill} d="m12 9-2-1.25v2.5L12 9ZM12 15l2 1.25v-2.5L12 15Z" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m2 2 20 20"
    />
  </Svg>
)
