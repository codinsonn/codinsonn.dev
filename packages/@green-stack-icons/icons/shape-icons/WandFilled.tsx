import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <WandFilled/> --------------------------------------------------------------------------- */

export const WandFilled = ({
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
      d="M21.49 21.49c-.68.68-1.79.68-2.47 0l-9.77-9.77a1.75 1.75 0 0 1 0-2.47 1.75 1.75 0 0 1 2.47 0l9.77 9.77c.68.68.68 1.78 0 2.47Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M4.233 4.233a1 1 0 0 1 1.414 0l2.47 2.47a1 1 0 0 1-1.414 1.414l-2.47-2.47a1 1 0 0 1 0-1.414ZM17.307 4.583a1 1 0 0 1 0 1.414l-2.12 2.12a1 1 0 1 1-1.414-1.414l2.12-2.12a1 1 0 0 1 1.414 0ZM8.117 13.773a1 1 0 0 1 0 1.414l-2.12 2.12a1 1 0 0 1-1.414-1.414l2.12-2.12a1 1 0 0 1 1.414 0ZM10.95 2a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1ZM2 10.95a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m12.605 15.075 2.47-2.47"
    />
    <Path
      fill={fill}
      d="M9.267 9.233a1.75 1.75 0 0 0-.017 2.487l3.355 3.355 2.47-2.47L11.72 9.25a1.75 1.75 0 0 0-2.453-.017Z"
    />
  </Svg>
)

