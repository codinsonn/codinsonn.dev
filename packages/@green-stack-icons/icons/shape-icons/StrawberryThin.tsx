import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <StrawberryThin/> ----------------------------------------------------------------------- */

export const StrawberryThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M12 5.98c.39-2 1.16-3.8 5-3.98-.03.35-.61 4.33-5 3.98ZM12 5.98c-.39-2-1.16-3.8-5-3.98.03.35.61 4.33 5 3.98Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M20 9.993c0 4.42-3.58 12.01-8 12.01s-8-7.59-8-12.01 3.58-3.98 8-3.98 8-.45 8 3.98ZM8 10.05h.01M11.99 12.05h.02M11.99 18.05h.02M9 15.05h.01M15 15.05h.01M15.99 10.05H16"
    />
  </Svg>
)
