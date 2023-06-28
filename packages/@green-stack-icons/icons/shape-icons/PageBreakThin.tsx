import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <PageBreakThin/> ------------------------------------------------------------------------ */

export const PageBreakThin = ({
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
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M5 12h2M2 12h2M8 12h2M11 12h2M14 12h2M17 12h2M20 12h2"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M18 2H6v7h12V2ZM18 15H6v7h12v-7Z"
    />
  </Svg>
)

