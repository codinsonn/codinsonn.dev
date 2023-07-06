import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <TextScanThin/> ------------------------------------------------------------------------- */

export const TextScanThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22 7V2h-5M22 17v5h-5M2 7V2h5M2 17v5h5M9.083 13h5.834m-5.834 0L12 6l2.917 7m-5.834 0L7 18m7.917-5L17 18"
    />
  </Svg>
)
