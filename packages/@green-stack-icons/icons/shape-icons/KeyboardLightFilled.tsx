import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <KeyboardLightFilled/> ------------------------------------------------------------------ */

export const KeyboardLightFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M7 18a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM19 18a1 1 0 0 1 1-1v2a1 1 0 0 1-1-1Zm3 1h-2v-2h2v2Zm0 0a1 1 0 1 0 0-2v2ZM1 18a1 1 0 0 1 1-1v2a1 1 0 0 1-1-1Zm3 1H2v-2h2v2Zm0 0a1 1 0 1 0 0-2v2ZM12 5a1 1 0 0 1 1 1h-2a1 1 0 0 1 1-1Zm-1 3V6h2v2h-2Zm0 0a1 1 0 1 0 2 0h-2ZM2.777 8.808a1 1 0 0 1 1.414 0l-1.414 1.414a1 1 0 0 1 0-1.414Zm1.414 2.828-1.414-1.414L4.19 8.808l1.414 1.413-1.414 1.415Zm0 0a1 1 0 1 0 1.414-1.415L4.19 11.636ZM18.364 11.605a1 1 0 0 1 0-1.414l1.414 1.414a1 1 0 0 1-1.414 0Zm2.828-1.414-1.414 1.414-1.414-1.414 1.413-1.414 1.415 1.414Zm0 0a1 1 0 1 0-1.415-1.414l1.415 1.414Z"
      clipRule="evenodd"
    />
  </Svg>
)
