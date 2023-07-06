import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <LayerAddThin/> ------------------------------------------------------------------------- */

export const LayerAddThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m22 12-10 6-10-6"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m22 16-10 6-10-6M22 8l-10 6L2 8l10-6 10 6Z"
    />
    <Path stroke={fill} strokeLinejoin="round" strokeMiterlimit={10} d="M9 8h6M12 5v6" />
  </Svg>
)
