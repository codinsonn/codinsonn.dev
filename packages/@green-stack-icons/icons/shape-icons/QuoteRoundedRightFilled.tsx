import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <QuoteRoundedRightFilled/> -------------------------------------------------------------- */

export const QuoteRoundedRightFilled = ({
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
      d="M18.761 8.966a1 1 0 0 1 1.163.805c.05.273.076.54.076.822.032 2.476-1.458 5.066-3.854 6.008l-.006.002A5.928 5.928 0 0 1 14 17a1 1 0 1 1 0-2c.488 0 .965-.088 1.417-.262 1.52-.599 2.608-2.364 2.583-4.124V10.6a2.57 2.57 0 0 0-.044-.471 1 1 0 0 1 .805-1.163Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="M16.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M16.5 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM13 10.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM9.761 8.966a1 1 0 0 1 1.163.805c.05.273.076.54.076.822.032 2.476-1.458 5.066-3.854 6.008l-.006.002A5.928 5.928 0 0 1 5 17a1 1 0 1 1 0-2 3.93 3.93 0 0 0 1.417-.262c1.52-.599 2.608-2.364 2.583-4.124V10.6c0-.156-.014-.306-.044-.471a1 1 0 0 1 .805-1.163Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="M7.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M7.5 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM4 10.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z"
      clipRule="evenodd"
    />
  </Svg>
)

