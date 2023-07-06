import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <DropboxFilled/> ------------------------------------------------------------------------ */

export const DropboxFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="m12 21-5-3.28 5-3.27 5 3.27L12 21ZM7 9.55 2 6.28 7 3l5 3.28-5 3.27ZM7 16.11l-5-3.28 5-3.28 5 3.28-5 3.28ZM17 9.55l-5-3.27L17 3l5 3.28-5 3.27ZM17 16.11l-5-3.28 5-3.28 5 3.28-5 3.28Z"
    />
  </Svg>
)
