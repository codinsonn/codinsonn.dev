import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <NewspaperThin/> ------------------------------------------------------------------------ */

export const NewspaperThin = ({
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
      d="M20 22c-1.1 0-2-.9-2-2V9h4v11c0 1.1-.9 2-2 2Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M18 9V2H2v20h18c-1.1 0-2-.9-2-2V9Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M5 19h10M12 9h3M12 6h3M5 16h10M5 13h10"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M9 5H5v5h4V5Z"
    />
  </Svg>
)

