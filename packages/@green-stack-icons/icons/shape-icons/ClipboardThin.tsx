import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <ClipboardThin/> ------------------------------------------------------------------------ */

export const ClipboardThin = ({
  size = 24,
  fill = '#333333',
  ...svgProps
}: IconProps) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    {...svgProps}
  >
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 4v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4h3c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h3Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 6H9c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1Z"
    />
  </Svg>
)

