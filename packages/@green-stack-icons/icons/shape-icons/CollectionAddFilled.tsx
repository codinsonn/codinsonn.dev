import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <CollectionAddFilled/> ------------------------------------------------------------------ */

export const CollectionAddFilled = ({
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
    <Path fill={fill} d="M21 3h-8v8h8V3ZM11 13H3v8h8v-8ZM11 3H3v8h8V3Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M21 18h-8v-2h8v2Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M16 21v-8h2v8h-2Z"
      clipRule="evenodd"
    />
  </Svg>
)

