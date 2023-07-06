import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <MoneyTransferThin/> -------------------------------------------------------------------- */

export const MoneyTransferThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 14V2M15 5.69c-.25-.83-1.08-1.47-2.13-1.64-1.05-.17-2.15.15-2.76.8-.08.08-.76.82-.44 1.63.2.51.71.79 1.4 1.16.75.41.97.34 2.1.87 1.16.54 1.35.8 1.44.94.34.56.11 1.12.06 1.22-.32.72-1.18 1.02-1.5 1.13-.14.05-1.39.46-2.64-.05-.69-.28-1.06-.7-1.17-.85-.2-.24-.3-.48-.36-.64M9 19H2M22 19h-7M5 22l-3-3 3-3M19 22l3-3-3-3"
    />
  </Svg>
)
