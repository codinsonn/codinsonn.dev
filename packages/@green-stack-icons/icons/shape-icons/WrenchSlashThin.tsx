import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <WrenchSlashThin/> ---------------------------------------------------------------------- */

export const WrenchSlashThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M3.42 22 2 20.59 13.13 9.46a4.349 4.349 0 0 0 1.42 1.41L3.42 22Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M20.66 10.41c-1.85 1.85-4.94 1.77-6.89-.19-1.95-1.95-2.03-5.04-.18-6.88 1.33-1.33 3.28-1.66 4.98-1.04l-2.81 2.81c-.4.4-.43 1.01-.08 1.36l1.84 1.84c.35.35.96.32 1.36-.08l2.81-2.81c.63 1.71.29 3.67-1.03 4.99Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m2 2 20 20"
    />
  </Svg>
)
