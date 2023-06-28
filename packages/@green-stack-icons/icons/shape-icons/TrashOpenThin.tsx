import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <TrashOpenThin/> ------------------------------------------------------------------------ */

export const TrashOpenThin = ({
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
      d="M16.15 22h-8.3a1 1 0 0 1-.99-.84L5 10h14l-1.86 11.16a1 1 0 0 1-.99.84ZM3.5 10h17M10 13.5v5M14 13.5v5M15.95 4.56l-7.9 1.31 1.26-2.8c.14-.3.42-.52.75-.58l2.89-.48c.33-.05.67.06.89.3l2.11 2.25ZM3 6.71l18-3"
    />
  </Svg>
)

