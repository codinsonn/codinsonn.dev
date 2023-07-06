import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <WifiFilled/> --------------------------------------------------------------------------- */

export const WifiFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M16.79 14.328a1 1 0 0 1-1.395.237A5.855 5.855 0 0 0 12 13.5c-1.281 0-2.455.4-3.395 1.065a1 1 0 0 1-1.157-1.631A7.855 7.855 0 0 1 12 11.5c1.7 0 3.278.53 4.552 1.434a1 1 0 0 1 .237 1.394Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M19.777 11.89a1 1 0 0 1-1.408.128C16.679 10.61 14.45 9.75 12 9.75c-2.45 0-4.679.86-6.369 2.268a1 1 0 0 1-1.28-1.536C6.397 8.778 9.076 7.75 12 7.75c2.924 0 5.603 1.028 7.649 2.732a1 1 0 0 1 .128 1.408Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M22.747 9.415a1 1 0 0 1-1.412.082C18.907 7.333 15.624 6 12 6 8.376 6 5.093 7.333 2.665 9.497a1 1 0 1 1-1.33-1.494C4.125 5.517 7.88 4 12 4c4.12 0 7.875 1.517 10.665 4.003a1 1 0 0 1 .082 1.412ZM12 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      clipRule="evenodd"
    />
  </Svg>
)
