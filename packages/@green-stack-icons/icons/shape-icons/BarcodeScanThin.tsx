import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <BarcodeScanThin/> ---------------------------------------------------------------------- */

export const BarcodeScanThin = ({
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
      d="M22 7V2h-5M22 17v5h-5M2 7V2h5M2 17v5h5"
    />
    <Path
      stroke={fill}
      strokeLinecap="square"
      d="M5 7v10M12 7v10M19 7v10M16 7h-1v10h1V7ZM9 7H8v10h1V7Z"
    />
  </Svg>
)

