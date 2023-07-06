import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Pen4Filled/> --------------------------------------------------------------------------- */

export const Pen4Filled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M2 17.001a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      d="m19.586 6.291-8.515 8.51-1.071 3.2 3.192-1.06 8.515-8.51c.39-.39.39-1.03 0-1.42l-.7-.72c-.4-.39-1.03-.39-1.421 0Z"
    />
  </Svg>
)
