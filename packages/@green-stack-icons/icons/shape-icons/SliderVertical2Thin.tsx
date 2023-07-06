import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <SliderVertical2Thin/> ------------------------------------------------------------------ */

export const SliderVertical2Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12 14V2M12 22v-4M10 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM19 22V10M19 6V2M17 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM5 22V10M5 6V2M3 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
    />
  </Svg>
)
