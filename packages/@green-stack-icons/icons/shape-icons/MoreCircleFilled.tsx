import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <MoreCircleFilled/> --------------------------------------------------------------------- */

export const MoreCircleFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M7.5 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM13 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM18.5 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12.5 12a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM7 12a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM18 12a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Z"
    />
  </Svg>
)
