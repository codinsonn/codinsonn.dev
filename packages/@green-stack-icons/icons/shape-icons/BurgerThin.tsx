import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <BurgerThin/> --------------------------------------------------------------------------- */

export const BurgerThin = ({
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
      strokeMiterlimit={10}
      d="M2 13h20"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M3 16c0 1.11.25 2.16.71 3.13C5.07 22.01 8.27 22 12 22c3.73 0 6.93.01 8.29-2.87.46-.97.71-2.02.71-3.13H3ZM21 10c0-4.42-4.03-8-9-8s-9 3.58-9 8h18ZM15.99 7h.02M11.99 5h.02M8 7h.01"
    />
  </Svg>
)

