import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <GridViewThin/> ------------------------------------------------------------------------- */

export const GridViewThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22 2h-8v8h8V2ZM22 14h-8v8h8v-8ZM10 14H2v8h8v-8ZM10 2H2v8h8V2Z"
    />
  </Svg>
)
