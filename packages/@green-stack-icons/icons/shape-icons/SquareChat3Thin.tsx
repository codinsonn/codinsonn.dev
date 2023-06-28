import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <SquareChat3Thin/> ---------------------------------------------------------------------- */

export const SquareChat3Thin = ({
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
      d="M22 9.6v6.8c0 .33-.27.6-.6.6H19v3l-3-3h-4.4c-.33 0-.6-.27-.6-.6V9.6c0-.33.27-.6.6-.6h9.8c.33 0 .6.27.6.6Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M16 9h-4.4c-.33 0-.6.27-.6.6V14H9l-4 4v-4H2.8c-.44 0-.8-.36-.8-.8V4.8c0-.44.36-.8.8-.8h12.4c.44 0 .8.36.8.8V9Z"
    />
  </Svg>
)

