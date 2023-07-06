import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <MouseHover2Filled/> -------------------------------------------------------------------- */

export const MouseHover2Filled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M1 5a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6a1 1 0 1 1-2 0V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a1 1 0 1 1 0 2H5a4 4 0 0 1-4-4V5Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M13.625 10.743a.75.75 0 0 1 .788.023l8 5.282a.75.75 0 0 1-.324 1.37l-3.232.386 2.134 3.696a1 1 0 0 1-1.732 1l-2.134-3.696-1.95 2.606a.75.75 0 0 1-1.35-.404l-.574-9.569a.75.75 0 0 1 .374-.694Z"
      clipRule="evenodd"
    />
  </Svg>
)
