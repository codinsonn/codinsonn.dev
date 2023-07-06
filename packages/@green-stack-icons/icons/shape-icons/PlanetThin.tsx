import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <PlanetThin/> --------------------------------------------------------------------------- */

export const PlanetThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M16.74 3.2c2.25-1.21 4.04-1.57 4.84-.78.79.8.43 2.59-.78 4.84-1.22 2.25-3.29 4.97-5.93 7.61-2.64 2.64-5.36 4.71-7.61 5.93-2.25 1.21-4.04 1.57-4.84.78-.79-.8-.43-2.59.78-4.84"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M20.8 7.26c1.21-2.25 1.57-4.04.78-4.84-.8-.79-2.59-.43-4.84.78 1.72.92 3.14 2.34 4.06 4.06ZM2.42 21.58c.8.79 2.59.43 4.84-.78a9.925 9.925 0 0 1-4.06-4.06c-1.21 2.25-1.57 4.04-.78 4.84Z"
      clipRule="evenodd"
    />
  </Svg>
)
