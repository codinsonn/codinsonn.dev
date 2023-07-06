import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <PrivacyGuardSuccessThin/> -------------------------------------------------------------- */

export const PrivacyGuardSuccessThin = ({
  size = 24,
  fill = '#333333',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M19.76 5.23C15.84 5.23 12 2 12 2S8.16 5.23 4.24 5.23c0 0-2.37 11.76 7.76 16.77 10.13-5.01 7.76-16.77 7.76-16.77Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m16 9-4.85 5L9 11.79"
    />
  </Svg>
)
