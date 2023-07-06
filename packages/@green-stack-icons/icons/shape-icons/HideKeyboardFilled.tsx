import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <HideKeyboardFilled/> ------------------------------------------------------------------- */

export const HideKeyboardFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M21 15H3c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M6.668 16.445a1 1 0 0 1 1.387-.277L12 18.798l3.945-2.63a1 1 0 0 1 1.11 1.664l-4.5 3a1 1 0 0 1-1.11 0l-4.5-3a1 1 0 0 1-.277-1.387Z"
      clipRule="evenodd"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.5 12h7M19 12h.01M19 6h.01M15.5 6h.01M12 6h.01M8.5 6h.01M4.99 6h.02M19 9h.01M15.5 9h.01M12 9h.01M8.5 9h.01M4.99 9h.02M4.99 12h.02"
    />
  </Svg>
)
