import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <TooltipFilled/> ------------------------------------------------------------------------ */

export const TooltipFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M4 4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h5l2.143 3.57a1 1 0 0 0 1.714 0L15 17h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M16.995 10.5h.01M11.995 10.5h.01M6.995 10.5h.01"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM12 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM7 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
  </Svg>
)
