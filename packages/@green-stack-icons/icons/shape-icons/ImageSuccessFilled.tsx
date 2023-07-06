import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ImageSuccessFilled/> ------------------------------------------------------------------- */

export const ImageSuccessFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="m15.07 9.46-3.49 5.59a.999.999 0 0 1-1.47.25l-3.2-2.56a1 1 0 0 0-1.5.29l-3.08 5.48c-.38.67.1 1.49.86 1.49H20.8c.76 0 1.24-.81.88-1.48L16.8 9.51c-.36-.67-1.32-.7-1.73-.05Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="M8.98 10c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M23.107 3.857 19.4 7.564l-2.507-2.507 1.414-1.414L19.4 4.736l2.293-2.293 1.414 1.414Z"
      clipRule="evenodd"
    />
  </Svg>
)
