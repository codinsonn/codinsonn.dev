import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <CodeFilled/> --------------------------------------------------------------------------- */

export const CodeFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M16.793 6.793a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L20.586 12l-3.793-3.793a1 1 0 0 1 0-1.414ZM7.207 6.793a1 1 0 0 1 0 1.414L3.414 12l3.793 3.793a1 1 0 1 1-1.414 1.414l-4.5-4.5a1 1 0 0 1 0-1.414l4.5-4.5a1 1 0 0 1 1.414 0ZM15.428 3.066a1 1 0 0 1 .576 1.292l-6.14 16a1 1 0 1 1-1.868-.716l6.14-16a1 1 0 0 1 1.292-.576Z"
      clipRule="evenodd"
    />
  </Svg>
)
