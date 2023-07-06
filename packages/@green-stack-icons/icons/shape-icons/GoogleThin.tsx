import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <GoogleThin/> --------------------------------------------------------------------------- */

export const GoogleThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M3.81 17.68A9.775 9.775 0 0 1 2 12c0-1.57.37-3.06 1.03-4.38M12.24 12H22c0 2.02-.55 3.91-1.53 5.47M6.38 20.2a10.42 10.42 0 0 0 5.87 1.8c2.22 0 4.2-.69 5.78-1.86M5.29 4.65A10.37 10.37 0 0 1 12.24 2c2.12 0 4.1.63 5.73 1.7"
    />
  </Svg>
)
