import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Play4Filled/> -------------------------------------------------------------------------- */

export const Play4Filled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path fill={fill} d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10Z" />
    <Path
      fill={fill}
      d="M9 8v8c0 .39.41.63.75.44l6.995-4c.34-.19.34-.68 0-.87l-6.995-4A.5.5 0 0 0 9 8Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 8v8c0 .39.41.63.75.44l6.995-4c.34-.19.34-.68 0-.87l-6.995-4A.5.5 0 0 0 9 8Z"
    />
  </Svg>
)
