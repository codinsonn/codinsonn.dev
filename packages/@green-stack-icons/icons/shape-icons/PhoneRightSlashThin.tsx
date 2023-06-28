import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <PhoneRightSlashThin/> ------------------------------------------------------------------ */

export const PhoneRightSlashThin = ({
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
      d="m13.55 7.54 2.12 2.12-6.01 6.01-2.12-2.12L3 18.09l2.12 2.12c1.95 1.95 6.91.16 11.08-4.01s5.96-9.13 4.01-11.08L18.09 3l-4.54 4.54ZM3 3l18 18"
    />
  </Svg>
)

