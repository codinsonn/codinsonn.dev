import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ChevronLargeUpFilled/> ----------------------------------------------------------------- */

export const ChevronLargeUpFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M11.629 9.072a1 1 0 0 1 .742 0l10 4a1 1 0 0 1-.742 1.857L12 11.076l-9.629 3.851a1 1 0 0 1-.742-1.857l10-4Z"
      clipRule="evenodd"
    />
  </Svg>
)
