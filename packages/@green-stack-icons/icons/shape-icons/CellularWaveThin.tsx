import * as React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <CellularWaveThin/> --------------------------------------------------------------------- */

export const CellularWaveThin = ({
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
    <Circle cx={12} cy={10.662} r={2} stroke={fill} />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 2a9.996 9.996 0 0 0-5 8.662 9.996 9.996 0 0 0 5 8.662M17 19.324a9.996 9.996 0 0 0 5-8.662A9.996 9.996 0 0 0 17 2"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 5.465a5.998 5.998 0 0 0-3 5.197c0 2.221 1.207 4.16 3 5.197M15 15.86a5.998 5.998 0 0 0 3-5.198c0-2.22-1.207-4.16-3-5.197M12 13v9"
    />
  </Svg>
)

