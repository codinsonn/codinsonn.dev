import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <AltKey3Thin/> -------------------------------------------------------------------------- */

export const AltKey3Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M19 2H5C3.35 2 2 3.35 2 5v14c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3V5c0-1.65-1.35-3-3-3ZM13 18h5"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M6 18h3l6-12h3"
    />
  </Svg>
)
