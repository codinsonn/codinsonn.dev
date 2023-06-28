import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Team2Filled/> -------------------------------------------------------------------------- */

export const Team2Filled = ({
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
      d="M11.88 15.47C11.38 13.48 9.38 12 7 12c-2.76 0-5 1.99-5 4.44 1.97.45 3.69.56 5 .56 1.45 0 2.73-.14 3.8-.32.29-.45.65-.86 1.08-1.21ZM7 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
    <Path
      fill={fill}
      d="M10 19.33c2.36.53 4.43.67 6 .67 2.43 0 4.48-.32 6-.67 0-2.95-2.69-5.33-6-5.33s-6 2.39-6 5.33ZM16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </Svg>
)

