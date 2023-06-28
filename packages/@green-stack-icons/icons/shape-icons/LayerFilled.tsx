import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <LayerFilled/> -------------------------------------------------------------------------- */

export const LayerFilled = ({
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
      d="M1.143 11.486a1 1 0 0 1 1.372-.344L12 16.834l9.486-5.691a1 1 0 1 1 1.029 1.714l-10 6a1 1 0 0 1-1.03 0l-10-6a1 1 0 0 1-.342-1.371Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M1.143 15.486a1 1 0 0 1 1.372-.344L12 20.834l9.486-5.691a1 1 0 1 1 1.029 1.715l-10 6a1 1 0 0 1-1.03 0l-10-6a1 1 0 0 1-.342-1.373Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="m22 8-10 6L2 8l10-6 10 6Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M11.486 1.143a1 1 0 0 1 1.028 0l10 6a1 1 0 0 1 0 1.714l-10 6a1 1 0 0 1-1.028 0l-10-6a1 1 0 0 1 0-1.714l10-6ZM3.944 8 12 12.834 20.056 8 12 3.166 3.944 8Z"
      clipRule="evenodd"
    />
  </Svg>
)

