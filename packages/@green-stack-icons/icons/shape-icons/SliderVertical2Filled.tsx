import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <SliderVertical2Filled/> ---------------------------------------------------------------- */

export const SliderVertical2Filled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
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
      d="M12 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM19 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM5 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M10 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM17 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM3 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
    />
    <Path
      fill={fill}
      d="M10 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM17 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM3 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
    />
  </Svg>
)

