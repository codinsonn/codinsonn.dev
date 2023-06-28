import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Undo2Thin/> ---------------------------------------------------------------------------- */

export const Undo2Thin = ({
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
      d="M4.29 7.29C6.41 4.68 8.75 3 12 3c1.45 0 2.83.35 4.04.96A8.993 8.993 0 0 1 21 12a9 9 0 0 1-9 9c-3.52 0-6.56-2.02-8.04-4.96"
    />
    <Path stroke={fill} strokeLinecap="round" d="M6 9H3V6l3 3Z" />
  </Svg>
)

