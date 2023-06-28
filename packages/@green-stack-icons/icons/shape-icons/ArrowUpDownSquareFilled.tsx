import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <ArrowUpDownSquareFilled/> -------------------------------------------------------------- */

export const ArrowUpDownSquareFilled = ({
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
      d="M19 22H5c-1.66 0-3-1.34-3-3V5c0-1.66 1.34-3 3-3h14c1.66 0 3 1.34 3 3v14c0 1.66-1.34 3-3 3Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 19V5M15.5 15.5 12 19l-3.5-3.5M8.5 8.5 12 5l3.5 3.5"
    />
  </Svg>
)

