import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ControllerErrorThin/> ------------------------------------------------------------------ */

export const ControllerErrorThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 7V5c0-1.66-1.34-3-3-3H6M21.55 11.67C21.37 9.04 19.199 7 16.577 7H7.433C4.81 7 2.64 9.04 2.46 11.67L2 19.56v.14C2 20.96 3.01 22 4.261 22c.8 0 1.53-.42 1.951-1.11l1.51-2.08c.391-.51.981-.81 1.612-.81h5.342c.63 0 1.231.3 1.601.81l1.51 2.08c.421.69 1.162 1.11 1.952 1.11C20.989 22 22 20.96 22 19.7v-.14l-.45-7.89ZM14.5 15l-5-5M9.5 15l5-5"
    />
  </Svg>
)
