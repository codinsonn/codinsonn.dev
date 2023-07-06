import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <PowerButtonThin/> ---------------------------------------------------------------------- */

export const PowerButtonThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M19 4.86c1.85 1.82 3 4.35 3 7.14 0 5.52-4.48 10-10 10S2 17.52 2 12c0-2.79 1.15-5.32 3-7.14M12 12V2"
    />
  </Svg>
)
