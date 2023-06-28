import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <TextFilled/> --------------------------------------------------------------------------- */

export const TextFilled = ({
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
      fill={fill}
      fillRule="evenodd"
      d="M12 1a1 1 0 0 1 1 1v19h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3V2a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M1 2a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V3H3v3a1 1 0 0 1-2 0V2Z"
      clipRule="evenodd"
    />
  </Svg>
)

