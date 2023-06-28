import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <TagThin/> ------------------------------------------------------------------------------ */

export const TagThin = ({
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
    <Path d="M12.94 18H3c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h9.94-5.22 8.81c.3 0 .58.13.77.36L22 12l-4.7 5.64c-.19.23-.47.36-.77.36H7.72" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12.94 18H3c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h9.94-5.22 8.81c.3 0 .58.13.77.36L22 12l-4.7 5.64c-.19.23-.47.36-.77.36H7.72"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </Svg>
)

