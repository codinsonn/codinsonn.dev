import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <UndoFilled/> --------------------------------------------------------------------------- */

export const UndoFilled = ({
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
      d="M15.59 4.85A8 8 0 0 0 12 4C8.46 4 6.17 6.23 3.82 9.57c-.32.45-.94.56-1.39.24a.996.996 0 0 1-.24-1.39C4.53 5.09 7.34 2 12 2c1.55 0 3.11.37 4.49 1.07A9.944 9.944 0 0 1 22 12c0 5.51-4.49 10-10 10-3.8 0-7.22-2.11-8.93-5.51a.998.998 0 0 1 1.78-.9A7.969 7.969 0 0 0 12 20c4.41 0 8-3.59 8-8 0-3.04-1.69-5.78-4.41-7.15Z"
    />
    <Path
      fill={fill}
      d="M3 3c.55 0 1 .45 1 1v4h4c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1Z"
    />
  </Svg>
)

