import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <UsbThin/> ------------------------------------------------------------------------------ */

export const UsbThin = ({
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
      d="m12 18-6-2v-3M12 16l6-2v-3M6 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <Path stroke={fill} strokeLinecap="round" d="M19 9h-2v2h2V9Z" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v14M12 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <Path stroke={fill} strokeLinecap="round" d="m12 3-1.73 3h3.46L12 3Z" />
  </Svg>
)

