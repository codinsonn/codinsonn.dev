import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <FireFilled/> --------------------------------------------------------------------------- */

export const FireFilled = ({
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
      d="M12 22c-2.72 0-7.43-2.67-7.95-7.01-.36-3.04 1.46-5.39 1.96-6 .41 2.11 1.52 3.71 2.94 4 .26.05.59.07.98 0-.11-2.32.07-6.66 2.93-9.99.31-.37.8-.7 1.14-1 .24 2.64.98 4.12 1.8 5 1.11 1.19 2.79 2 3.68 4.28.04.09.15.37.24.72.62 2.38.32 5.88-1.96 7.99C15.85 21.76 13.35 22 13 22h-1Z"
    />
    <Path
      fill={fill}
      d="M14 16a4.023 4.023 0 0 1-4 1c1.13 1.09 2.7 1.5 4 1 2.01-.76 2.83-3.46 2-5-.26-.47-.64-.79-1-1 .43 1.41.04 2.96-1 4Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M14 16a4.023 4.023 0 0 1-4 1c1.13 1.09 2.7 1.5 4 1 2.01-.76 2.83-3.46 2-5-.26-.47-.64-.79-1-1 .43 1.41.04 2.96-1 4Z"
    />
  </Svg>
)

