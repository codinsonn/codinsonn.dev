import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <PaypalFilled/> ------------------------------------------------------------------------- */

export const PaypalFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M9.72 11.41h1.83c2.19 0 4.46-1.85 5.17-4.2l.05-.18.01-.03h1.76c1.14 0 2.12.48 2.76 1.35.72.97.89 2.32.47 3.68l-.05.18c-.71 2.35-2.98 4.2-5.17 4.2h-5.38l-1.39 4.58C9.59 21.6 9.03 22 8.42 22c-.13 0-.27-.02-.4-.06a1.434 1.434 0 0 1-.95-1.79l2.65-8.74Z"
    />
    <Path
      fill={fill}
      d="M16.3 3.35C15.66 2.48 14.68 2 13.54 2H7.11c-.03 0-.05.01-.08.01-.1 0-.19.03-.29.06-.08.03-.16.04-.24.08-.08.04-.15.1-.22.15-.08.05-.15.1-.22.17-.06.06-.1.14-.14.21-.05.09-.1.17-.14.27-.01.02-.03.04-.03.06l-2.14 7.06-1.54 5.08c-.23.76.19 1.55.95 1.79.13.04.27.06.4.06.61 0 1.17-.4 1.36-1.01l1.39-4.58h5.38c2.19 0 4.46-1.85 5.17-4.2l.05-.18c.42-1.36.25-2.71-.47-3.68Z"
    />
  </Svg>
)
