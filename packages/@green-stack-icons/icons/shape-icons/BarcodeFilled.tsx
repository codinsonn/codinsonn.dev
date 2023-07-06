import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <BarcodeFilled/> ------------------------------------------------------------------------ */

export const BarcodeFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M4 5v14H2V5h2ZM11 5v14H9V5h2ZM18 5v14h-2V5h2ZM12 5h3v14h-3V5ZM19 5h3v14h-3V5ZM5 5h3v14H5V5Z"
      clipRule="evenodd"
    />
  </Svg>
)
