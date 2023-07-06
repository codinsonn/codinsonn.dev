import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <TemperatureHeatThin/> ------------------------------------------------------------------ */

export const TemperatureHeatThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M9 14.595V4C9 2.9 8.1 2 7 2s-2 .9-2 2v10.595c-1.5.8-2.3 2.6-1.9 4.399.3 1.4 1.5 2.599 2.9 2.899 2.6.6 5-1.4 5-3.899 0-1.5-.8-2.799-2-3.399Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M7 18.494a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
    <Path d="M13 7c1.645 0 3 1.355 3 3s-1.355 3-3 3" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M13 7c1.645 0 3 1.355 3 3s-1.355 3-3 3M13 3.6V2M18.7 15.695l-1.1-1.1M17.6 5.4l1.1-1.1M19.4 9.997H21"
    />
  </Svg>
)
