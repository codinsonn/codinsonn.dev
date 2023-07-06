import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <WaterDropThin/> ------------------------------------------------------------------------ */

export const WaterDropThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.59 2s5.07 7.6 6.51 11.56c.14.38.38 1.1.37 2.05-.01 1.99-1.13 4.04-2.84 5.23-2.47 1.71-6.03 1.52-8.32-.44-1.49-1.28-2.28-3.2-2.31-4.93-.02-.94.19-1.67.34-2.12C6.61 9.42 11.59 2 11.59 2Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.05 14.3c-.03.18-.05.4-.05.63.01.97.45 2.03 1.28 2.74.63.55 1.43.84 2.25.89"
    />
  </Svg>
)
