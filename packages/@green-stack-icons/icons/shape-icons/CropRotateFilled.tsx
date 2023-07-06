import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <CropRotateFilled/> --------------------------------------------------------------------- */

export const CropRotateFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M12 3a1 1 0 0 1 1-1h4c2.212 0 4 1.788 4 4v1a1 1 0 1 1-2 0V6c0-1.108-.892-2-2-2h-4a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M16.966 6.01h6.068L20 8.992 16.966 6.01ZM4 16a1 1 0 0 1 1 1v1c0 1.108.892 2 2 2h4a1 1 0 1 1 0 2H7c-2.212 0-4-1.788-4-4v-1a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="m4 15.008 3.034 2.982H.966L4 15.008Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="M16 16H9c-.55 0-1-.45-1-1V8h7c.55 0 1 .45 1 1v7Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M7 7h8c1.102 0 2 .898 2 2v8H9c-1.102 0-2-.898-2-2V7Zm2 2v6h6V9H9Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M8 4a1 1 0 0 1 1 1v4H5a1 1 0 0 1 0-2h2V5a1 1 0 0 1 1-1ZM15 15h4a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-4Z"
      clipRule="evenodd"
    />
  </Svg>
)
