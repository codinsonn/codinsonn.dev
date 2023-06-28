import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Menu8Filled/> -------------------------------------------------------------------------- */

export const Menu8Filled = ({
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
      d="M12 10c-1.102 0-2 .898-2 2 0 1.102.898 2 2 2 1.102 0 2-.898 2-2 0-1.102-.898-2-2-2ZM5 10c-1.102 0-2 .898-2 2 0 1.102.898 2 2 2 1.102 0 2-.898 2-2 0-1.102-.898-2-2-2ZM19 10c-1.102 0-2 .898-2 2 0 1.102.898 2 2 2 1.102 0 2-.898 2-2 0-1.102-.898-2-2-2ZM12 17c-1.102 0-2 .898-2 2 0 1.102.898 2 2 2 1.102 0 2-.898 2-2 0-1.102-.898-2-2-2ZM5 17c-1.102 0-2 .898-2 2 0 1.102.898 2 2 2 1.102 0 2-.898 2-2 0-1.102-.898-2-2-2ZM19 17c-1.102 0-2 .898-2 2 0 1.102.898 2 2 2 1.102 0 2-.898 2-2 0-1.102-.898-2-2-2ZM12 3c-1.102 0-2 .898-2 2 0 1.102.898 2 2 2 1.102 0 2-.898 2-2 0-1.102-.898-2-2-2ZM5 3c-1.102 0-2 .898-2 2 0 1.102.898 2 2 2 1.102 0 2-.898 2-2 0-1.102-.898-2-2-2ZM19 3c-1.102 0-2 .898-2 2 0 1.102.898 2 2 2 1.102 0 2-.898 2-2 0-1.102-.898-2-2-2Z"
      clipRule="evenodd"
    />
  </Svg>
)

