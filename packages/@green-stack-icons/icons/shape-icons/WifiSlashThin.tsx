import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <WifiSlashThin/> ------------------------------------------------------------------------ */

export const WifiSlashThin = ({
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
      d="M15.97 13.75c-1.1-.79-2.48-1.25-3.97-1.25-1.49 0-2.87.46-3.97 1.25M19.01 11.25c-1.87-1.56-4.32-2.5-7.01-2.5-2.69 0-5.14.94-7.01 2.5M22 8.75C19.39 6.43 15.87 5 12 5S4.61 6.43 2 8.75M12 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m3 3 18 18"
    />
  </Svg>
)

