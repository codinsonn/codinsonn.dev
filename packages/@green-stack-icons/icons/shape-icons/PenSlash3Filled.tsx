import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <PenSlash3Filled/> ---------------------------------------------------------------------- */

export const PenSlash3Filled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M9.172 11.294 3.77 16.7 2 22l5.3-1.77 5.406-5.402-3.534-3.534Zm5.656 1.413 4.401-4.398-3.538-3.538-4.398 4.4 3.535 3.536Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      d="m19.23 8.31-3.54-3.54 2.47-2.47a.996.996 0 0 1 1.41 0l2.13 2.13c.39.39.39 1.02 0 1.41l-2.47 2.47Z"
    />
    <Path stroke={stroke} strokeLinejoin="round" strokeMiterlimit={10} d="m19.23 8.31-3.54-3.54" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </Svg>
)
