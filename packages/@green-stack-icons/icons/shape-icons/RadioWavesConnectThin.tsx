import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <RadioWavesConnectThin/> ---------------------------------------------------------------- */

export const RadioWavesConnectThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 6.821C8.372 7.707 8 8.807 8 10c0 1.193.372 2.293 1 3.179M15 13.179c.628-.886 1-1.986 1-3.179a5.484 5.484 0 0 0-1-3.179M7 4.393C5.755 5.887 5 7.85 5 10c0 2.15.755 4.113 2 5.607M17 15.607c1.245-1.494 2-3.457 2-5.607 0-2.15-.755-4.113-2-5.607M5 2c-1.86 2.087-3 4.903-3 8 0 3.097 1.14 5.912 3 8M19 18c1.86-2.088 3-4.903 3-8 0-3.097-1.14-5.913-3-8M12 11v11"
    />
    <Circle cx={12} cy={10} r={1} stroke={fill} />
  </Svg>
)
