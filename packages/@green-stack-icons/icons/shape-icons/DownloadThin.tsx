import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <DownloadThin/> ------------------------------------------------------------------------- */

export const DownloadThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path d="M22 14v7c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-7" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22 14v7c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-7M12 2v15"
    />
    <Path stroke={fill} strokeLinecap="round" strokeLinejoin="round" d="m17 12-5 5-5-5" />
  </Svg>
)
