import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <CollapseThin/> ------------------------------------------------------------------------- */

export const CollapseThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m16 8 6-6M16 3v5h5M8 8 2 2M3 8h5V3M8 16l-6 6M8 21v-5H3M16 16l6 6M21 16h-5v5"
    />
  </Svg>
)
