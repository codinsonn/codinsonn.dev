import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Receipt2Thin/> ------------------------------------------------------------------------- */

export const Receipt2Thin = ({
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
      d="M21 22V2H3v20l2.25-2 2.25 2 2.25-2L12 22l2.25-2 2.25 2 2.25-2L21 22ZM15 17v-1.01M15 10.01V9"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 11.27c-.17-.62-.72-1.1-1.42-1.23-.7-.13-1.43.11-1.84.6-.05.06-.51.62-.29 1.23.14.38.47.59.93.87.5.31.64.26 1.4.65.77.4.9.6.96.7.22.42.07.84.04.92-.21.54-.79.76-1 .85-.09.04-.93.34-1.76-.04-.46-.21-.7-.53-.78-.63-.13-.19-.2-.36-.24-.48"
    />
    <Path
      stroke={fill}
      strokeLinejoin="round"
      d="M6 6h12M6 9h5M6 16h5M6 12h4"
    />
  </Svg>
)

