import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <CameraFilled/> ------------------------------------------------------------------------- */

export const CameraFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M21 19H3c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1Z"
    />
    <Path
      fill={fill}
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM22 9h-4V5h3c.55 0 1 .45 1 1v3ZM5.5 9a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <Path stroke={stroke} strokeLinejoin="round" strokeMiterlimit={10} d="M22 9h-4V5" />
    <Path stroke={stroke} strokeMiterlimit={10} d="M5.5 9a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
  </Svg>
)
