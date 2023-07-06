import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <IosFilled/> ---------------------------------------------------------------------------- */

export const IosFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M21.97 12.81c-.45 5.51-5.27 9.6-10.78 9.16-5.5-.45-9.6-5.27-9.16-10.78.45-5.5 5.27-9.6 10.78-9.16 5.5.45 9.6 5.28 9.16 10.78Z"
    />
    <Path
      fill={fill}
      d="M12.99 12.74c-.1 1.65-1.19 2.88-2.42 2.75-1.24-.13-2.16-1.58-2.06-3.23.1-1.65 1.19-2.88 2.42-2.75 1.24.13 2.16 1.58 2.06 3.23Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M6 11v4M6 7.99V8M19.13 10.77c-.41-.76-1.28-1.37-2.17-1.26-.72.09-1.47.58-1.62 1.33-.12.61.35 1.04.82 1.32.72.44 1.8.48 2.32 1.21.36.5.26 1.09-.17 1.51-.91.92-2.4.76-3.18-.22M12.99 12.74c-.1 1.65-1.19 2.88-2.42 2.75-1.24-.13-2.16-1.58-2.06-3.23.1-1.65 1.19-2.88 2.42-2.75 1.24.13 2.16 1.58 2.06 3.23Z"
    />
  </Svg>
)
