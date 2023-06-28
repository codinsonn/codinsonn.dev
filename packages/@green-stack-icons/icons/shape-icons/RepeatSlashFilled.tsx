import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <RepeatSlashFilled/> -------------------------------------------------------------------- */

export const RepeatSlashFilled = ({
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
      d="M5.879 8H5c-2.252 0-4 1.748-4 4s1.748 4 4 4h1a1 1 0 1 0 0-2H5c-1.148 0-2-.852-2-2 0-1.148.852-2 2-2h2.879l-2-2ZM9 11.121v.933l.574-.359L9 11.121Zm2.815 2.815-.334.21-.02.012-1.348.842 1.343.84.03.018L15 18.054v-.933l-3.185-3.185ZM18.121 16H19c2.252 0 4-1.748 4-4s-1.748-4-4-4h-1a1 1 0 1 0 0 2h1c1.148 0 2 .852 2 2 0 1.148-.852 2-2 2h-2.879l2 2ZM15 12.879l-.574-.574.574-.36v.934Zm-2.815-2.815L9 6.879v-.933l3.514 2.196.03.019 1.343.84-1.348.841-.02.013-.334.209ZM1.47 1.47a.75.75 0 0 1 1.06 0l20 20a.75.75 0 1 1-1.06 1.06l-20-20a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </Svg>
)

