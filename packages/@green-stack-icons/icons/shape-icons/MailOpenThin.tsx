import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <MailOpenThin/> ------------------------------------------------------------------------- */

export const MailOpenThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="m22 11-10 6-10-6v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-9Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="m2 11 10 6 10-6V9L12 2 2 9v2Z"
    />
  </Svg>
)
