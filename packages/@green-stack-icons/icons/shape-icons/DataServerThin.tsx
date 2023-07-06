import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <DataServerThin/> ----------------------------------------------------------------------- */

export const DataServerThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path stroke={fill} strokeLinecap="square" strokeLinejoin="round" d="M2 21h20" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 15v5M16 20H8v2h8v-2ZM20 8H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2ZM20 15H4c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2ZM22 8H2v1h20V8Z"
    />
    <Path stroke={fill} strokeLinejoin="round" d="M5 4v2M8 4v2M5 11v2M8 11v2" />
  </Svg>
)
