import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <MoreThin/> ----------------------------------------------------------------------------- */

export const MoreThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </Svg>
)
