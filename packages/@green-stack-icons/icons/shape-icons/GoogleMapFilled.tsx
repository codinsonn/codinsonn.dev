import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <GoogleMapFilled/> ---------------------------------------------------------------------- */

export const GoogleMapFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M12.84 4.02H5.5A2.5 2.5 0 0 0 3 6.52v13a2.5 2.5 0 0 0 2.5 2.5h13a2.5 2.5 0 0 0 2.5-2.5v-13c0-.8-.38-1.52-.97-1.97l.01.01c.17.45.27.94.27 1.45 0 2.21-4 9.99-4 9.99s-4-7.78-4-9.99c0-.73.19-1.4.53-1.99Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12.49 7.11 3.48 20.99M14.51 22.02l-7.61-6.3M19.17 21.93 8.55 13.17"
    />
    <Path
      fill={fill}
      d="M20.31 6.01c0 2.22-4 9.99-4 9.99s-4-7.77-4-9.99c0-2.22 1.79-4.01 4-4.01s4 1.8 4 4.01Z"
    />
    <Path fill={fill} d="M16.31 6.48a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M20.31 6.01c0 2.22-4 9.99-4 9.99s-4-7.77-4-9.99c0-2.22 1.79-4.01 4-4.01s4 1.8 4 4.01Z"
    />
    <Path stroke={stroke} strokeMiterlimit={10} d="M16.31 6.48a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
  </Svg>
)
