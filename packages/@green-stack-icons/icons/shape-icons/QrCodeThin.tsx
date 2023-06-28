import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <QrCodeThin/> --------------------------------------------------------------------------- */

export const QrCodeThin = ({
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
      d="M9 14H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1Z"
    />
    <Path stroke={fill} strokeLinecap="round" d="M7 17H6v1h1v-1Z" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 3h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      d="M18 6h-1v1h1V6ZM7 6H6v1h1V6ZM4 9H3v1h1V9ZM10 9H9v1h1V9ZM4 3H3v1h1V3ZM10 3H9v1h1V3ZM18 17h-1v1h1v-1ZM15 20h-1v1h1v-1ZM21 20h-1v1h1v-1ZM15 14h-1v1h1v-1ZM21 14h-1v1h1v-1Z"
    />
  </Svg>
)

