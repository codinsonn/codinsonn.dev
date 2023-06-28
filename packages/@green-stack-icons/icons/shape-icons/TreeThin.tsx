import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <TreeThin/> ----------------------------------------------------------------------------- */

export const TreeThin = ({
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
    <Path stroke={fill} strokeLinecap="round" d="M12.5 17h-1v5h1v-5Z" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.97 12H6l4-5H8l4-5 4 5h-2l4 5h-2l4 5H4l3.97-5Z"
      clipRule="evenodd"
    />
  </Svg>
)

