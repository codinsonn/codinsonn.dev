import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <AgendaFilled/> ------------------------------------------------------------------------- */

export const AgendaFilled = ({
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
      d="M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4Z"
      clipRule="evenodd"
    />
    <Path stroke={stroke} strokeLinecap="round" d="M2 6.5h2M2 18.5h2M2 12.5h2" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M7 16a5 5 0 0 1 10 0v3H7v-3Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      clipRule="evenodd"
    />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      d="M7 16a5 5 0 0 1 10 0v3H7v-3Z"
      clipRule="evenodd"
    />
    <Path
      stroke={stroke}
      d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      clipRule="evenodd"
    />
  </Svg>
)

