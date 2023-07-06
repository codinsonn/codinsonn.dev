import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <AutoplayThin/> ------------------------------------------------------------------------- */

export const AutoplayThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 6h-.01C18.17 3.57 15.27 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10c4.1 0 7.62-2.47 9.16-6"
    />
    <Path stroke={fill} d="m19 3 1 3-3-1" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 8v8c0 .39.41.63.75.44l7-4c.34-.19.34-.68 0-.87l-7-4A.5.5 0 0 0 9 8Z"
    />
  </Svg>
)
