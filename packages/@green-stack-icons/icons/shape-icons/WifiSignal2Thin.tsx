import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <WifiSignal2Thin/> ---------------------------------------------------------------------- */

export const WifiSignal2Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path stroke={fill} strokeLinecap="round" d="M12 4v14" />
    <Path stroke={fill} d="M4 20a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H6a2 2 0 0 1-2-2Z" />
    <Circle cx={12} cy={3} r={1} stroke={fill} />
    <Path
      stroke={fill}
      d="M16.5 2s.5.667.5 2-.5 2-.5 2M7.5 5.988s-.5-.667-.5-2c0-1.334.5-2 .5-2M19.5 1s.5 1.2.5 3-.5 3-.5 3M4.5 7S4 5.8 4 4s.5-3 .5-3"
    />
  </Svg>
)
