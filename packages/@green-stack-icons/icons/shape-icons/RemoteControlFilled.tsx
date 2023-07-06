import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <RemoteControlFilled/> ------------------------------------------------------------------ */

export const RemoteControlFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V4Z"
      clipRule="evenodd"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      d="M10.5 15.947v.106M13.5 15.947v.106M13.5 18.947v.106M10.5 18.947v.106"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      clipRule="evenodd"
    />
    <Path stroke={stroke} strokeLinecap="square" d="M12 8v2M13 9h-2" />
    <Path stroke={stroke} d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" clipRule="evenodd" />
  </Svg>
)
