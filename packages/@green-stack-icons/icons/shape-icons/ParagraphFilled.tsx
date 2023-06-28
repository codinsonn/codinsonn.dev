import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <ParagraphFilled/> ---------------------------------------------------------------------- */

export const ParagraphFilled = ({
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
      d="M9 1C5.138 1 2 4.138 2 8s3.138 7 7 7h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M14 2a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-1v19a1 1 0 1 1-2 0V3h-2v19a1 1 0 1 1-2 0V2Z"
      clipRule="evenodd"
    />
  </Svg>
)

