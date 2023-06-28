import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Network2Thin/> ------------------------------------------------------------------------- */

export const Network2Thin = ({
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
      d="M12 17V8M9.88 7.12l-4.47 4.47M14.12 7.12l4.47 4.47M4 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12 22a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM20 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </Svg>
)

