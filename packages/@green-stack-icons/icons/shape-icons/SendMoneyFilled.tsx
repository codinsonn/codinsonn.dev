import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <SendMoneyFilled/> ---------------------------------------------------------------------- */

export const SendMoneyFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path fill={fill} d="M12 15a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 12.5v-1.01M12 5.51V4.5M14 6.77c-.17-.62-.72-1.1-1.42-1.23-.7-.13-1.43.11-1.84.6-.05.06-.51.62-.29 1.22.14.38.47.59.93.87.5.31.64.26 1.4.65.77.4.9.6.96.7.22.42.07.84.04.92-.21.54-.79.76-1 .85-.09.04-.93.34-1.76-.04-.46-.21-.7-.53-.78-.63-.13-.19-.2-.36-.24-.49"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M1 19a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M18.293 15.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L20.586 19l-2.293-2.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>
)
