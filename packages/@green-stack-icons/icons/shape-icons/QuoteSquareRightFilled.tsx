import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <QuoteSquareRightFilled/> --------------------------------------------------------------- */

export const QuoteSquareRightFilled = ({
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
      fill={fill}
      fillRule="evenodd"
      d="M19 9a1 1 0 0 1 1 1v4c0 2.212-1.788 4-4 4h-2a1 1 0 1 1 0-2h2c1.108 0 2-.892 2-2v-4a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      d="M18 12h-3c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M13 8c0-1.102.898-2 2-2h3c1.102 0 2 .898 2 2v3c0 1.102-.898 2-2 2h-3c-1.102 0-2-.898-2-2V8Zm5 0h-3v3h3V8ZM10 9a1 1 0 0 1 1 1v4c0 2.212-1.788 4-4 4H5a1 1 0 1 1 0-2h2c1.108 0 2-.892 2-2v-4a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      d="M9 12H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M4 8c0-1.102.898-2 2-2h3c1.102 0 2 .898 2 2v3c0 1.102-.898 2-2 2H6c-1.102 0-2-.898-2-2V8Zm5 0H6v3h3V8Z"
      clipRule="evenodd"
    />
  </Svg>
)

