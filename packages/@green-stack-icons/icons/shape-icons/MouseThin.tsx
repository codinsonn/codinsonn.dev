import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <MouseThin/> ---------------------------------------------------------------------------- */

export const MouseThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m22 2-1.87 3.24c-.58 1-2.02 1-2.6 0l-.57-.99c-.58-1-2.02-1-2.6 0L12.5 7.47"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M4.5 21.33a5.002 5.002 0 0 1-1.83-6.83l3-5.2a5.002 5.002 0 0 1 6.83-1.83 5.002 5.002 0 0 1 1.83 6.83l-3 5.2a5.002 5.002 0 0 1-6.83 1.83Z"
      clipRule="evenodd"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="m9.5 12.67 3-5.2A5.002 5.002 0 0 0 5.67 9.3l-.5.87 4.33 2.5ZM9.5 12.67l3-5.2a5.002 5.002 0 0 1 1.83 6.83l-.5.87-4.33-2.5Z"
    />
  </Svg>
)
