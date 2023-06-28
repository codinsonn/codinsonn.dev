import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <PhoneWavesThin/> ----------------------------------------------------------------------- */

export const PhoneWavesThin = ({
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
      d="M15 15.179c.628-.886 1-1.986 1-3.179a5.484 5.484 0 0 0-1-3.179M17 17.607c1.245-1.494 2-3.457 2-5.607 0-2.15-.755-4.113-2-5.607M19 20c1.86-2.087 3-4.903 3-8 0-3.097-1.14-5.913-3-8"
    />
    <Path stroke={fill} strokeLinecap="round" d="M2 2h4a4 4 0 0 1 4 4v16" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 15V9"
    />
  </Svg>
)

