import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <SignatureThin/> ------------------------------------------------------------------------ */

export const SignatureThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M2 15h6M18 15h4M20.5 12c-.4-3.5-.8-5.9-1.4-5.9-.7 0-.7 3.4-1.9 3.7-1.9.4-5.2-7.9-5.3-7.8-.1.1 2.9 4.7 3 10.5.1 5.2-2 9.6-2.7 9.5-1-.2.2-11.7-.9-11.9-.5-.1-1 2.2-1.9 2.1-.6 0-1.1-1.3-1.5-3M2 9l3 3M5 9l-3 3"
    />
  </Svg>
)
