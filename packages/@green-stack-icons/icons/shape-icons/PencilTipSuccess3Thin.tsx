import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <PencilTipSuccess3Thin/> ---------------------------------------------------------------- */

export const PencilTipSuccess3Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M13 7H7l3-5 3 5Z"
    />
    <Path d="M7 7h6-6l-3 5h12l-3-5" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M7 7h6-6Zm0 0-3 5h12l-3-5"
    />
    <Path d="M4 22V12h12v10" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M4 22V12h12v10"
    />
    <Path stroke={fill} strokeMiterlimit={10} d="m15.6 3.35 1.8 1.8 3-3" />
  </Svg>
)
