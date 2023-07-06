import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <WalletFilled/> ------------------------------------------------------------------------- */

export const WalletFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path fill={fill} d="M3 7h17V4.263a1 1 0 0 0-1.229-.974L3 7Z" />
    <Path stroke={stroke} strokeLinecap="round" strokeLinejoin="round" d="M3 7h17" />
    <Path
      fill={fill}
      d="M21 21H3c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1Z"
    />
    <Path fill={fill} d="M22 16h-4c-1.1 0-2-.9-2-2s.9-2 2-2h4v4Z" />
    <Path stroke={stroke} strokeLinejoin="round" d="M22 16h-4c-1.1 0-2-.9-2-2s.9-2 2-2h4" />
  </Svg>
)
