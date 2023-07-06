import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <CommandKeyFilled/> --------------------------------------------------------------------- */

export const CommandKeyFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path fill={fill} fillRule="evenodd" d="M7 7h10v10H7V7Zm2 2v6h6V9H9Z" clipRule="evenodd" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M3 5c0-1.108.892-2 2-2s2 .892 2 2v2H5c-1.108 0-2-.892-2-2Zm2-4C2.788 1 1 2.788 1 5c0 2.212 1.788 4 4 4h4V5c0-2.212-1.788-4-4-4Zm14 0c-2.212 0-4 1.788-4 4v4h4c2.212 0 4-1.788 4-4 0-2.212-1.788-4-4-4Zm-2 4c0-1.108.892-2 2-2s2 .892 2 2-.892 2-2 2h-2V5ZM1 19c0-2.212 1.788-4 4-4h4v4c0 2.212-1.788 4-4 4-2.212 0-4-1.788-4-4Zm4-2c-1.108 0-2 .892-2 2s.892 2 2 2 2-.892 2-2v-2H5Zm11-2h-1v4c0 2.212 1.788 4 4 4 2.212 0 4-1.788 4-4 0-2.212-1.788-4-4-4h-3Zm1 4v-2h2c1.108 0 2 .892 2 2s-.892 2-2 2-2-.892-2-2Z"
      clipRule="evenodd"
    />
  </Svg>
)
