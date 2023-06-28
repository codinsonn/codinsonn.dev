import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <CancelBadgeThin/> ---------------------------------------------------------------------- */

export const CancelBadgeThin = ({
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
      d="M20.86 14.13c-.86.57-1.3 1.61-1.09 2.63.36 1.79-1.22 3.37-3.01 3.01-1.02-.2-2.06.23-2.63 1.09a2.55 2.55 0 0 1-4.25 0c-.58-.86-1.62-1.3-2.64-1.09-1.79.36-3.37-1.22-3.01-3.01.2-1.02-.23-2.06-1.09-2.63a2.55 2.55 0 0 1 0-4.25C4 9.3 4.44 8.26 4.23 7.24c-.36-1.79 1.22-3.37 3.01-3.01C8.26 4.44 9.3 4 9.87 3.14a2.55 2.55 0 0 1 4.25 0c.58.86 1.62 1.3 2.64 1.09 1.79-.36 3.37 1.22 3.01 3.01-.21 1.02.23 2.06 1.09 2.63 1.52 1.01 1.52 3.25 0 4.26ZM8.5 8.5l7 7M15.5 8.5l-7 7"
    />
  </Svg>
)

