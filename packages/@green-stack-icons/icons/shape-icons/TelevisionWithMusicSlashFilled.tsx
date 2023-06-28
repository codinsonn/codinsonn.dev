import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <TelevisionWithMusicSlashFilled/> ------------------------------------------------------- */

export const TelevisionWithMusicSlashFilled = ({
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
      d="M2 4.121V16h11.879L2 4.121ZM15.879 18l2 2H6a1 1 0 1 1 0-2h9.879Zm2.242-2-12-12H22v12h-3.879Z"
      clipRule="evenodd"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12 11.5V7l1.7.5c.8.2 1.3.9 1.3 1.6v.8"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M10.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M1.47 1.47a.75.75 0 0 1 1.06 0l20 20a.75.75 0 1 1-1.06 1.06l-20-20a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </Svg>
)

