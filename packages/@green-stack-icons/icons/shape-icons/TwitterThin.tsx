import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <TwitterThin/> -------------------------------------------------------------------------- */

export const TwitterThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M22 5.89c-.74.32-1.54.53-2.36.64.85-.5 1.5-1.29 1.8-2.23-.79.47-1.67.79-2.6.98A4.121 4.121 0 0 0 15.85 4c-2.27 0-4.1 1.81-4.1 4.04 0 .32.03.63.09.92-3.4-.17-6.42-1.77-8.45-4.22-.35.6-.56 1.29-.56 2.04 0 1.4.73 2.64 1.82 3.35a3.99 3.99 0 0 1-1.85-.5v.04c0 1.96 1.42 3.59 3.28 3.97-.33.09-.7.13-1.08.13-.26 0-.53-.01-.78-.07.53 1.6 2.04 2.78 3.83 2.81a8.28 8.28 0 0 1-6.06 1.66C3.82 19.34 5.97 20 8.29 20c7.55 0 11.67-6.15 11.67-11.49 0-.18-.01-.35-.02-.52.82-.57 1.5-1.28 2.06-2.1Z"
    />
  </Svg>
)
