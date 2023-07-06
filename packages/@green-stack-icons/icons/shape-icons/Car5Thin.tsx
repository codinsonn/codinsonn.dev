import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Car5Thin/> ----------------------------------------------------------------------------- */

export const Car5Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path stroke={fill} d="M6 4h12l2 5 2 3v5s-6.075 1-10 1-10-1-10-1v-5l2-3 2-5Z" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 17v3h3v-2.567C3.259 17.207 2 17 2 17ZM19 17.433V20h3v-3s-1.259.207-3 .433Z"
      clipRule="evenodd"
    />
    <Path stroke={fill} strokeLinecap="round" d="M2 9h20" />
    <Path
      stroke={fill}
      d="M17 17.672c-1.674.18-3.495.328-5 .328s-3.326-.147-5-.328V17.6L9 15h6l2 2.6v.072ZM6 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </Svg>
)
