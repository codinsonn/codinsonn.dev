import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <GameFilled/> --------------------------------------------------------------------------- */

export const GameFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M18 22H6c-.55 0-1-.45-1-1V10h14v11c0 .55-.45 1-1 1ZM19 10H5V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v7Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M16 15.99v.02M12 15.99v.02M13.99 18h.02M13.99 14h.02M8.5 15.97v.02M8.5 16.49a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
    <Path stroke={stroke} strokeLinejoin="round" strokeMiterlimit={10} d="M5 10h14" />
  </Svg>
)
