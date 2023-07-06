import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <QuoteRoundedLeftFilled/> --------------------------------------------------------------- */

export const QuoteRoundedLeftFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M7.86 7.397A5.927 5.927 0 0 1 10 7a1 1 0 1 1 0 2c-.488 0-.965.088-1.417.262-1.52.599-2.608 2.364-2.583 4.124v.014c0 .156.014.306.044.471a1 1 0 0 1-1.968.358A4.574 4.574 0 0 1 4 13.407C3.968 10.931 5.458 8.341 7.854 7.4l.006-.002Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="M7.5 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M7.5 12a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM4 13.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM16.86 7.397A5.928 5.928 0 0 1 19 7a1 1 0 1 1 0 2c-.488 0-.965.088-1.417.262-1.52.599-2.608 2.364-2.583 4.124v.014c0 .156.014.306.044.471a1 1 0 1 1-1.968.358 4.581 4.581 0 0 1-.076-.822c-.032-2.476 1.458-5.066 3.854-6.008l.006-.002Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="M16.5 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M16.5 12a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM13 13.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z"
      clipRule="evenodd"
    />
  </Svg>
)
