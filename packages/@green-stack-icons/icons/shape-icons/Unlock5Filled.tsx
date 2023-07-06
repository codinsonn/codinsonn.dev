import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Unlock5Filled/> ------------------------------------------------------------------------ */

export const Unlock5Filled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M12 4c-1.658 0-3 1.342-3 3v5H7V7c0-2.762 2.238-5 5-5s5 2.238 5 5v2h-2V7c0-1.658-1.342-3-3-3Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      d="M17 22H7c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12 18v1"
    />
  </Svg>
)
