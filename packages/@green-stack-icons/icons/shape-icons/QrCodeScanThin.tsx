import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <QrCodeScanThin/> ----------------------------------------------------------------------- */

export const QrCodeScanThin = ({
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
      d="M2 18v4h4M18 2h4v4M6 2H2v4M22 18v4h-4M6 10h4V6H6v4ZM14 10h4V6h-4v4ZM6 18h4v-4H6v4ZM14 18h4v-4h-4v4ZM22 14H2"
    />
  </Svg>
)

