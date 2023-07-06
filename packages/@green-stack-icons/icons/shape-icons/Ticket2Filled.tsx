import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Ticket2Filled/> ------------------------------------------------------------------------ */

export const Ticket2Filled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M21.59 9.53c.25-.04.41-.27.41-.51V6H2v3.02c0 .25.16.48.41.52C3.59 9.73 4.5 10.76 4.5 12s-.91 2.27-2.09 2.47c-.25.04-.41.27-.41.51V18h20v-3.02c0-.25-.16-.48-.41-.52A2.495 2.495 0 0 1 19.5 12c0-1.24.91-2.27 2.09-2.47Z"
    />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M14 9v1M14 7v1M14 11v1M14 15v1M14 17v1M14 13v1"
    />
  </Svg>
)
