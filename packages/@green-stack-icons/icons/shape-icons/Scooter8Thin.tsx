import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Scooter8Thin/> ------------------------------------------------------------------------- */

export const Scooter8Thin = ({
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
      d="M13 21v-6a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0ZM9.879 7.121 8 9l-1 7 3 2V9l.658-1.316a3.01 3.01 0 0 1-.78-.563ZM13.342 7.684 14 9v9l3-2-1-7-1.879-1.879c-.227.227-.49.418-.78.563Z"
    />
    <Circle
      cx={12}
      cy={5}
      r={3}
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m10 9 .658-1.316c.404.202.86.316 1.342.316.482 0 .938-.114 1.342-.316L14 9v9h-1v-3a1 1 0 1 0-2 0v3h-1V9ZM15 5h2M9 5H7M7 6V4H4v2h3ZM20 6V4h-3v2h3Z"
    />
  </Svg>
)

