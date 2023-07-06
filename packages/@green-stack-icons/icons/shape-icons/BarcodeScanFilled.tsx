import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <BarcodeScanFilled/> -------------------------------------------------------------------- */

export const BarcodeScanFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M16 2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V3h-4a1 1 0 0 1-1-1ZM22 16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h4v-4a1 1 0 0 1 1-1ZM1 2a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H3v4a1 1 0 1 1-2 0V2ZM2 16a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M6 6v12H4V6h2ZM13 6v12h-2V6h2ZM20 6v12h-2V6h2ZM14 6h3v12h-3V6ZM7 6h3v12H7V6Z"
      clipRule="evenodd"
    />
  </Svg>
)
