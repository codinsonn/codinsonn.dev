import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <NewspaperFilled/> ---------------------------------------------------------------------- */

export const NewspaperFilled = ({
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
      d="M18.767 22A2.988 2.988 0 0 1 18 20V2H2v20h16.767Z"
      clipRule="evenodd"
    />
    <Path
      stroke={stroke}
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M5 19h10M12 9h3M12 6h3M5 16h10M5 13h10"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M9 5H5v5h4V5Z"
    />
    <Path
      fill={fill}
      d="M9 5H5v5h4V5ZM21 22c-1.1 0-2-.9-2-2V9h4v11c0 1.1-.9 2-2 2Z"
    />
  </Svg>
)

