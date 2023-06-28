import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <CookieThin/> --------------------------------------------------------------------------- */

export const CookieThin = ({
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
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22 12c-2.79 1.95-6.38-1.02-4.97-4.12l.05-.12-1.52.71c-.04.02-.08.03-.13.05-3.29.87-5.91-2.8-4.02-5.63L12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M8 8h.01M12 13h.01M20 16h.01M14 17h.01"
    />
    <Path
      stroke={fill}
      d="M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </Svg>
)

