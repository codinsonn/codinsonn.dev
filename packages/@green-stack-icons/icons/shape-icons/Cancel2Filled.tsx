import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Cancel2Filled/> ------------------------------------------------------------------------ */

export const Cancel2Filled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M16.043 5.443c.59-.59 1.534-.59 2.124 0 .59.59.59 1.534 0 2.124L7.564 18.161c-.583.6-1.549.599-2.13-.003a1.495 1.495 0 0 1 .009-2.115l10.6-10.6Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M18.167 16.043c.59.59.59 1.534 0 2.124-.59.59-1.534.59-2.124 0L5.448 7.564c-.6-.583-.599-1.549.003-2.13a1.495 1.495 0 0 1 2.115.009l10.6 10.6Z"
      clipRule="evenodd"
    />
  </Svg>
)
