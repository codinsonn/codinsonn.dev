import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <DropboxThin/> -------------------------------------------------------------------------- */

export const DropboxThin = ({
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
      strokeMiterlimit={10}
      d="m12 22-5-3.28 5-3.27 5 3.27L12 22ZM7 8.55 2 5.28 7 2l5 3.28-5 3.27ZM7 15.11l-5-3.28 5-3.28 5 3.28-5 3.28ZM17 8.55l-5-3.27L17 2l5 3.28-5 3.27ZM17 15.11l-5-3.28 5-3.28 5 3.28-5 3.28Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12 5.28 7 8.55l5 3.28 5-3.28-5-3.27Z"
    />
  </Svg>
)

