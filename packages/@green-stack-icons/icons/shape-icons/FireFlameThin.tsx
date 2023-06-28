import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <FireFlameThin/> ------------------------------------------------------------------------ */

export const FireFlameThin = ({
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
      strokeMiterlimit={10}
      d="M11.682 2c.28 1.11.25 7.8-2.91 8.56 0 0-1.82-.2-3.03-3.94-2.23 2.69-3.51 6.77-2.24 9.85 1.57 3.82 5.29 4.97 5.9 5.15 2.89.84 6.46.35 8.93-2.04 2.82-2.72 2.69-6.44 2.65-7.2-.26-4.53-3.97-8.66-9.3-10.38Z"
    />
  </Svg>
)

