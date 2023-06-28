import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Trash2Thin/> --------------------------------------------------------------------------- */

export const Trash2Thin = ({
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
      d="M16.13 22H7.87c-.5 0-.92-.37-.99-.86L5 8h14l-1.88 13.14c-.07.49-.49.86-.99.86ZM3.5 8h17M10 12v6M14 12v6M16 5H8l1.7-2.55c.19-.28.5-.45.84-.45h2.93c.33 0 .65.17.83.45L16 5ZM3 5h18"
    />
  </Svg>
)

