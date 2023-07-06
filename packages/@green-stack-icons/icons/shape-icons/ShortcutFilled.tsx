import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ShortcutFilled/> ----------------------------------------------------------------------- */

export const ShortcutFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="m12.84 11.55 2.09 3.44L19 5.51 8.25 4l2.08 3.41-.04.03C9 8.39 7.7 9.55 6.84 11.11c-.88 1.57-1.06 3.38-.58 4.98.47 1.66 1.87 2.91 3.32 3.44 1.47.56 3.03.59 4.41.25-1.43-.05-2.79-.5-3.8-1.26-1.01-.77-1.55-1.81-1.49-2.81.04-1.03.53-2 1.26-2.62.73-.66 1.75-1.15 2.88-1.54Z"
    />
  </Svg>
)
