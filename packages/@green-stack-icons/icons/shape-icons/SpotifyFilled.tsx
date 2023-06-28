import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <SpotifyFilled/> ------------------------------------------------------------------------ */

export const SpotifyFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    {...svgProps}
  >
    <Path
      fill={fill}
      d="M21.97 12.81c-.45 5.51-5.27 9.6-10.78 9.16-5.5-.45-9.6-5.27-9.16-10.78.45-5.5 5.27-9.6 10.78-9.16 5.5.45 9.6 5.28 9.16 10.78Z"
    />
    <Path
      stroke={stroke}
      strokeMiterlimit={10}
      d="M5.93 10.29a.52.52 0 0 1-.43-.24.502.502 0 0 1 .17-.68c4.4-2.66 9.14-2.65 12.7.03.22.17.26.48.1.7-.17.22-.48.26-.7.1-3.22-2.43-7.55-2.42-11.58.02-.08.05-.17.07-.26.07Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M7.1 13.42c3.37-2.02 6.55-1.98 9.53.02M8.4 16.63c2.47-1.38 4.78-1.42 6.92-.1"
    />
  </Svg>
)

