import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <TechnologyThin/> ----------------------------------------------------------------------- */

export const TechnologyThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.326 3.535A9.953 9.953 0 0 0 12 2a9.953 9.953 0 0 0-5.5 1.647M20.802 7.25a9.955 9.955 0 0 1 1.193 5.065M15 21.542a9.995 9.995 0 0 0 4-2.4M2.315 9.5A10.018 10.018 0 0 0 2 12c0 1.619.385 3.147 1.067 4.5"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      clipRule="evenodd"
    />
    <Path stroke={fill} strokeLinecap="round" strokeLinejoin="round" d="M6 7h2.767l2.648 4H16" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.848 12.457a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM20.5 16.576a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      clipRule="evenodd"
    />
    <Path stroke={fill} strokeLinecap="round" strokeLinejoin="round" d="M9 15.075h2" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.972 20C5.435 20 5 19.552 5 19s.435-1 .972-1C6.508 18 7 18.448 7 19s-.492 1-1.028 1Z"
      clipRule="evenodd"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 16h-2.609l-3.652 3H7"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      clipRule="evenodd"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 6h1M18 6h.5M10 22h1M6 15h.5"
    />
  </Svg>
)
