import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <WhatsappThin/> ------------------------------------------------------------------------- */

export const WhatsappThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M19.191 4.8A9.517 9.517 0 0 0 12.445 2a9.5 9.5 0 0 0-6.747 2.8A9.532 9.532 0 0 0 2.9 11.56c0 2.09.68 4.03 1.819 5.6L2 22l6.697-1.68c.31.13.63.26.95.36.889.28 1.818.42 2.798.42a9.523 9.523 0 0 0 6.756-2.8A9.503 9.503 0 0 0 22 11.56a9.583 9.583 0 0 0-2.809-6.76Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M9.813 14.19c2.512 2.51 5.575 3.53 6.826 2.27L18 15.1l-2.732-2.73-1.362 1.36-3.633-3.64 1.361-1.36L8.902 6 7.54 7.36c-1.261 1.26-.24 4.32 2.272 6.83Z"
    />
  </Svg>
)
