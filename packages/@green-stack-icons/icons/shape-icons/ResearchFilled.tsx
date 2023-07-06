import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ResearchFilled/> ----------------------------------------------------------------------- */

export const ResearchFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M4 21a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1ZM8 21a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v11a1 1 0 0 1-1 1ZM12 21a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1ZM16 21a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1ZM20 21a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1ZM4 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM8 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM12 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM20 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM16 11a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
      clipRule="evenodd"
    />
  </Svg>
)
