import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <BookOpenFilled/> ----------------------------------------------------------------------- */

export const BookOpenFilled = ({
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
      d="M6.515 4.121A2 2 0 0 0 5 6.061v.745a2 2 0 0 1 2.283-1.98L17 6.214V4.062a2 2 0 0 0-2.485-1.94l-8 2Z"
      clipRule="evenodd"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 6.806a2 2 0 0 1 2.283-1.98L17 6.214"
    />
    <Path
      fill={fill}
      d="M5 6.806a2 2 0 0 1 2.283-1.98l10 1.429A2 2 0 0 1 19 8.235v11.959a2 2 0 0 1-2.283 1.98l-10-1.429A2 2 0 0 1 5 18.765V6.806Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9 10 6 1M9 14l6 1"
    />
  </Svg>
)

