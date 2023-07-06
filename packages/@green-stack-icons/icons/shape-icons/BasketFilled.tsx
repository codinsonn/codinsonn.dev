import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <BasketFilled/> ------------------------------------------------------------------------- */

export const BasketFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M17.31 22H6.69c-.98 0-1.81-.71-1.97-1.67L3 10h18l-1.72 10.33c-.16.96-1 1.67-1.97 1.67Z"
    />
    <Path
      fill={fill}
      d="M21 11H3c-.34 0-.65-.17-.83-.45a.985.985 0 0 1-.09-.94l1.96-4.58C4.79 3.26 6.53 2.08 8.46 2a.992.992 0 0 1 1.04.96c.02.55-.41 1.02-.96 1.04-1.17.04-2.21.76-2.66 1.81L4.52 9h14.97l-1.36-3.19A3.01 3.01 0 0 0 15.47 4c-.55-.02-.98-.49-.96-1.04.01-.55.49-.99 1.03-.96 1.93.08 3.67 1.26 4.42 3.03l1.96 4.58c.13.31.1.66-.08.94-.19.28-.5.45-.84.45Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M1 10a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M8 13.5v5M12 13.5v5M16 13.5v5"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M7.5 3c0-1.102.898-2 2-2h5c1.102 0 2 .898 2 2 0 1.102-.898 2-2 2h-5c-1.102 0-2-.898-2-2Z"
      clipRule="evenodd"
    />
  </Svg>
)
