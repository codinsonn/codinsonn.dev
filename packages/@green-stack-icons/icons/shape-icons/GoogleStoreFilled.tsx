import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <GoogleStoreFilled/> -------------------------------------------------------------------- */

export const GoogleStoreFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M3.45 2.1c-.27-.13-.55-.13-.8-.05l11.21 9.57 2.42-2.06.79-.67L3.45 2.1ZM17.65 14.87 3.56 21.89c-.5.24-1.05.07-1.34-.33l11.64-9.93 3.79 3.24ZM21.4 11.05 17.07 8.9l-.79.67-2.42 2.06 3.79 3.24L21.4 13c.8-.4.8-1.55 0-1.95Z"
    />
    <Path
      fill={fill}
      d="M2.65 2.05c-.37.14-.65.5-.65.95v17.91c0 .25.08.48.22.65l11.64-9.93L2.65 2.05Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m2.22 21.56 11.64-9.93L2.65 2.05M13.86 11.62l2.42-2.06.79-.67M13.86 11.63l3.79 3.24"
    />
  </Svg>
)
