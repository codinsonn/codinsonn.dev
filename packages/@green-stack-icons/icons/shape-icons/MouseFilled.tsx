import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <MouseFilled/> -------------------------------------------------------------------------- */

export const MouseFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M4.5 21.33a5.002 5.002 0 0 1-1.83-6.83l3-5.2a5.002 5.002 0 0 1 6.83-1.83 5.002 5.002 0 0 1 1.83 6.83l-3 5.2a5.002 5.002 0 0 1-6.83 1.83Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      d="m9.5 12.67 3-5.2A5.002 5.002 0 0 0 5.67 9.3l-.5.87 4.33 2.5ZM9.5 12.67l3-5.2a5.002 5.002 0 0 1 1.83 6.83l-.5.87-4.33-2.5ZM22.289 3.5a1 1 0 1 0-1.732-1l-1.87 3.239a.502.502 0 0 1-.869 0l-.569-.988-.001-.003c-.966-1.664-3.365-1.664-4.33 0l-.825 1.428a6.033 6.033 0 0 1 1.732 1l.823-1.425a.502.502 0 0 1 .87 0l.568.988.002.003c.965 1.664 3.364 1.664 4.33 0V6.74l1.87-3.24Z"
    />
    <Path stroke={stroke} strokeMiterlimit={10} d="m9.5 12.67 3-5.2M5.17 10.17l8.66 5" />
  </Svg>
)
