import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <HandZoomInThin/> ----------------------------------------------------------------------- */

export const HandZoomInThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path stroke={fill} strokeLinecap="round" strokeLinejoin="round" d="M4 12c-1-4 1-9 6-8" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m2 10 2 2 2-2M8 6l2-2-2-2"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.383 14.8v-4.33c0-.7.57-1.27 1.27-1.27.7 0 1.27.57 1.27 1.27v4.33-2.73c0-.7.57-1.27 1.27-1.27.7 0 1.27.57 1.27 1.27v2.73-1.18c0-.67.57-1.22 1.27-1.22.7 0 1.27.55 1.27 1.22v3.98c0 2.44-2.03 4.4-4.56 4.4h-1.08c-1.08 0-2.03-.37-2.79-.92l-5.19-4.95c-.51-.49-.51-1.33 0-1.82s1.27-.38 1.77.11l1.7 1.59V7.22c0-.67.57-1.22 1.27-1.22.7 0 1.27.55 1.27 1.22l-.01 7.58Z"
    />
  </Svg>
)
