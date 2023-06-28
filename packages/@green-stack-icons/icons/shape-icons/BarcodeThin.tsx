import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <BarcodeThin/> -------------------------------------------------------------------------- */

export const BarcodeThin = ({
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
      strokeLinecap="square"
      d="M3 6v12M10 6v12M17 6v12M14 6h-1v12h1V6ZM21 6h-1v12h1V6ZM7 6H6v12h1V6Z"
    />
  </Svg>
)

