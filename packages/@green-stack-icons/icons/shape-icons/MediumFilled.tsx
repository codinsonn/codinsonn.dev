import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <MediumFilled/> ------------------------------------------------------------------------- */

export const MediumFilled = ({
  size = 24,
  fill = '#333333',
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
      fillRule="evenodd"
      d="M3.728 2.038a1 1 0 0 1 1.124.438l7.14 11.616 7.157-11.616A1 1 0 0 1 21 3v18a1 1 0 1 1-2 0V6.53l-6.159 9.995a1 1 0 0 1-1.703-.001L5 6.537V21a1 1 0 1 1-2 0V3a1 1 0 0 1 .728-.962Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M1 21a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM17 21a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM1 3a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2H2a1 1 0 0 1-1-1ZM16 3a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </Svg>
)

