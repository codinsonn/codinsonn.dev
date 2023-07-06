import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <WandThin/> ----------------------------------------------------------------------------- */

export const WandThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M21.49 21.49c-.68.68-1.79.68-2.47 0l-9.77-9.77a1.75 1.75 0 0 1 0-2.47 1.75 1.75 0 0 1 2.47 0l9.77 9.77c.68.68.68 1.78 0 2.47Z"
    />
    <Path stroke={fill} strokeLinejoin="round" strokeMiterlimit={10} d="m9.24 9.24 4.6 4.6" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m3.94 3.94 2.47 2.47M13.48 6.41l2.12-2.12M4.29 15.6l2.12-2.12M9.95 2v3M5 9.95H2"
    />
  </Svg>
)
