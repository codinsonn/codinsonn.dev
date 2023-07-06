import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <SignalOffFilled/> ---------------------------------------------------------------------- */

export const SignalOffFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M21 2a1 1 0 1 0-2 0v14.879l2 2V2Zm-.356 20.765L19 21.121V22a1 1 0 0 0 1.644.765ZM17 14.88V6a1 1 0 1 0-2 0v6.879l2 2Zm-2 2.242 2 2V22a1 1 0 1 1-2 0v-4.879Zm-2-6.242V10a1 1 0 0 0-1.644-.765L13 10.879Zm-2 2.242 2 2V22a1 1 0 1 1-2 0v-8.879ZM9 14a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm-5 3a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1ZM3.47 3.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </Svg>
)
