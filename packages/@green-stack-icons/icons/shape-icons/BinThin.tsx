import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <BinThin/> ------------------------------------------------------------------------------ */

export const BinThin = ({
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
      d="M17.6 21H6.4c-.51 0-.94-.38-.99-.89L3.5 3h17l-1.9 17.11c-.06.51-.49.89-1 .89ZM2 3h20M10 8v8M14 8v8"
    />
  </Svg>
)

