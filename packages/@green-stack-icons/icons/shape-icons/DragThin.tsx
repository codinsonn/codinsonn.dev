import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <DragThin/> ----------------------------------------------------------------------------- */

export const DragThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22 12H2M19 9l3 3-3 3M5 9l-3 3 3 3M12 22V2M15 19l-3 3-3-3M15 5l-3-3-3 3"
    />
  </Svg>
)
