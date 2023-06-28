import * as React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Wireframe2Filled/> --------------------------------------------------------------------- */

export const Wireframe2Filled = ({
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
      d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9H2V4ZM2 13h12v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Z"
    />
    <Rect width={5} height={4} x={17} y={2} fill={fill} rx={1} />
    <Path stroke={stroke} strokeLinejoin="round" d="M2 13h12" />
    <Rect width={5} height={4} x={17} y={9} fill={fill} rx={1} />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      d="M5 16h6M2.611 2.56 8 7.5m0 0 6 5.5M8 7.5l5.389-4.94M8 7.5 2 13M5 19h4"
    />
  </Svg>
)

