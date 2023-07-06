import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <UserFilled/> --------------------------------------------------------------------------- */

export const UserFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M12 12C6.48 12 2 16.48 2 22h20c0-5.52-4.48-10-10-10ZM12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
  </Svg>
)
