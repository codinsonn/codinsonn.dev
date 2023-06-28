import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Table2Filled/> ------------------------------------------------------------------------- */

export const Table2Filled = ({
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
      d="M9 3H3v6h6V3ZM15 3H9v6h6V3ZM21 3h-6v6h6V3ZM9 9H3v6h6V9ZM15 9H9v6h6V9ZM21 9h-6v6h6V9ZM9 15H3v6h6v-6ZM15 15H9v6h6v-6ZM21 15h-6v6h6v-6Z"
    />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      d="M15 21V3M9 21V3M21 9H3M21 15H3"
    />
  </Svg>
)

