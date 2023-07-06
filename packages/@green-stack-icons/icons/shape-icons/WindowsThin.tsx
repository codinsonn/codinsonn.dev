import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <WindowsThin/> -------------------------------------------------------------------------- */

export const WindowsThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M8.12 10.53c-1.44-.05-3.11.5-4.06.88h-.01L2 20.09c3.38-1.37 5.54-1.26 6.88-.91.49.13.91.3 1.3.49l1.85-7.8c-1.21-.56-2.11-1.28-3.91-1.34Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M9.94 3c-1.66-.05-3.15.48-4.11.91L4.06 11.4l-.01.01h.01c.95-.38 2.62-.93 4.06-.88 1.8.06 2.7.78 3.91 1.34l1.79-7.54c-1.2-.56-2.1-1.27-3.88-1.33ZM13.31 12.34c-.48-.12-.9-.29-1.28-.47l-1.85 7.8c1.2.56 2.1 1.27 3.88 1.33 1.66.05 3.15-.48 4.11-.91l2.05-8.67c-3.38 1.37-5.57 1.27-6.91.92Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M15.12 4.82c-.49-.13-.91-.3-1.3-.49l-1.79 7.54c.38.18.8.35 1.28.47 1.34.35 3.53.45 6.91-.92L22 3.91c-3.38 1.37-5.54 1.26-6.88.91Z"
    />
  </Svg>
)
