import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <PhoneWavesFilled/> --------------------------------------------------------------------- */

export const PhoneWavesFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M14.422 15.995a1 1 0 0 1-.237-1.394c.509-.719.815-1.618.815-2.601 0-.983-.306-1.882-.815-2.6a1 1 0 1 1 1.631-1.157A6.484 6.484 0 0 1 17 12a6.484 6.484 0 0 1-1.184 3.757 1 1 0 0 1-1.394.238Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M16.36 18.375a1 1 0 0 1-.128-1.408C17.328 15.651 18 13.913 18 12c0-1.914-.672-3.65-1.768-4.967a1 1 0 1 1 1.536-1.28C19.161 7.425 20 9.613 20 12c0 2.386-.839 4.575-2.232 6.247a1 1 0 0 1-1.408.128Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M18.335 20.747a1 1 0 0 1-.082-1.412C19.952 17.429 21 14.85 21 12c0-2.85-1.048-5.429-2.747-7.335a1 1 0 1 1 1.494-1.33C21.768 5.604 23 8.655 23 12c0 3.345-1.232 6.396-3.253 8.665a1 1 0 0 1-1.412.082ZM11 16a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M1 2a1 1 0 0 1 1-1h4a5 5 0 0 1 5 5v16a1 1 0 1 1-2 0V6a3 3 0 0 0-3-3H2a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </Svg>
)
