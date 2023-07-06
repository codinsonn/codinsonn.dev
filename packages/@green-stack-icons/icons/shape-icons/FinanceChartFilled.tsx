import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <FinanceChartFilled/> ------------------------------------------------------------------- */

export const FinanceChartFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path fill={fill} d="M5 17h3v4H5v-4ZM10 15h3v6h-3v-6ZM15 13h3v8h-3v-8ZM20 11h3v10h-3V11Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M15.848 4.755a1 1 0 0 1 1.279-.604l2.753.986a1 1 0 0 1 .58 1.339L19.3 9.159a1 1 0 1 1-1.835-.794l.157-.363-12.36 5.36a1 1 0 1 1-.795-1.834l12.359-5.36-.373-.134a1 1 0 0 1-.604-1.279Z"
      clipRule="evenodd"
    />
    <Path fill={fill} fillRule="evenodd" d="M3 2v18h20v2H2a1 1 0 0 1-1-1V2h2Z" clipRule="evenodd" />
  </Svg>
)
