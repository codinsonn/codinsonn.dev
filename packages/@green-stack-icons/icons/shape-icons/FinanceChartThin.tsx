import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <FinanceChartThin/> --------------------------------------------------------------------- */

export const FinanceChartThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path stroke={fill} strokeLinecap="round" strokeLinejoin="round" d="M2 3v18h20" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 17h2v4H5v-4ZM10 15h2v6h-2v-6ZM15 13h2v8h-2v-8ZM20 11h2v10h-2V11ZM4.864 12.445 19.543 6.08m0 0-2.753-.986m2.753.986L18.38 8.762"
    />
  </Svg>
)
