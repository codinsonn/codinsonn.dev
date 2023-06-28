import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <ChevronLargeRightFilled/> -------------------------------------------------------------- */

export const ChevronLargeRightFilled = ({
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
      d="M14.928 11.629a1 1 0 0 1 0 .742l-4 10a1 1 0 1 1-1.856-.742L12.923 12 9.072 2.371a1 1 0 0 1 1.857-.742l4 10Z"
      clipRule="evenodd"
    />
  </Svg>
)

