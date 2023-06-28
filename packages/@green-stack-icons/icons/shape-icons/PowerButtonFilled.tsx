import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <PowerButtonFilled/> -------------------------------------------------------------------- */

export const PowerButtonFilled = ({
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
      d="M5.713 4.159A1 1 0 0 1 5.7 5.573 8.994 8.994 0 0 0 3 12c0 4.968 4.032 9 9 9s9-4.032 9-9a8.994 8.994 0 0 0-2.701-6.427A1 1 0 1 1 19.7 4.147C21.733 6.147 23 8.93 23 12c0 6.072-4.928 11-11 11S1 18.072 1 12c0-3.07 1.267-5.854 3.299-7.853a1 1 0 0 1 1.414.012Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M12 1a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
  </Svg>
)

