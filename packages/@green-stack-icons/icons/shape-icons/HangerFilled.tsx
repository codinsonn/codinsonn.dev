import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <HangerFilled/> ------------------------------------------------------------------------- */

export const HangerFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M12 13.998c-.55 0-1-.45-1-1v-.37c0-1.55.79-3.01 2.17-4 .63-.45.93-1.22.8-1.99-.14-.79-.81-1.46-1.6-1.6-.61-.11-1.2.05-1.66.44-.45.37-.71.93-.71 1.52 0 .55-.45 1-1 1s-1-.45-1-1c0-1.19.52-2.3 1.42-3.06.91-.76 2.1-1.08 3.29-.88 1.62.28 2.94 1.61 3.22 3.22.27 1.54-.34 3.06-1.6 3.96-.84.62-1.33 1.49-1.33 2.39v.37c0 .55-.45 1-1 1Z"
    />
    <Path
      fill={fill}
      d="M19.689 20.998H4.322A3.327 3.327 0 0 1 1 17.669c0-1.43.91-2.7 2.271-3.15l6.463-2.15a7.17 7.17 0 0 1 4.532 0l6.463 2.15A3.312 3.312 0 0 1 23 17.668a3.313 3.313 0 0 1-3.311 3.33Zm-7.684-7c-.56 0-1.1.09-1.63.26l-6.464 2.15a1.33 1.33 0 0 0 .41 2.59h15.357a1.33 1.33 0 0 0 .42-2.59l-6.462-2.15c-.53-.17-1.07-.26-1.631-.26Z"
    />
  </Svg>
)
