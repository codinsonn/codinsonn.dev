import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <TemperatureHeatFilled/> ---------------------------------------------------------------- */

export const TemperatureHeatFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M10.002 14.595V4c0-1.1-.9-1.999-2-1.999s-2 .9-2 2v10.595c-1.5.8-2.3 2.6-1.9 4.399.3 1.4 1.5 2.599 2.9 2.899 2.6.6 5-1.4 5-3.899 0-1.5-.8-2.799-2-3.399Z"
    />
    <Path fill={fill} d="M8.002 18.494a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M8.002 18.494a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
    <Path fill={fill} d="M12.002 7c1.646 0 3 1.355 3 3s-1.354 3-3 3" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M13.002 2a1 1 0 0 1 1 1v1.6a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1ZM15.3 13.293a1 1 0 0 1 1.414 0l1.1 1.1a1 1 0 0 1-1.414 1.414l-1.1-1.1a1 1 0 0 1 0-1.414ZM18.343 4.67a1 1 0 0 1-.154 1.407l-1.213.974a1 1 0 1 1-1.252-1.56l1.213-.974a1 1 0 0 1 1.406.154ZM16.476 9.997a1 1 0 0 1 1-1h1.527a1 1 0 1 1 0 2h-1.527a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </Svg>
)
