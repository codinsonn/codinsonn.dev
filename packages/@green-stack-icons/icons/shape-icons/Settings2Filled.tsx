import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Settings2Filled/> ---------------------------------------------------------------------- */

export const Settings2Filled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="m13.87 4.89-.31-2.45a.499.499 0 0 0-.5-.44H9.95c-.25 0-.47.19-.5.44l-.27 2.15c-.02.18-.15.34-.32.4-.84.31-1.64.79-2.33 1.41l-2.28-.96c-.23-.1-.5-.01-.63.21l-1.56 2.7c-.12.22-.06.5.14.65l1.97 1.49a7.493 7.493 0 0 0-.01 3.02h.01L2.2 15c-.2.15-.26.43-.13.65l1.56 2.7c.13.22.4.31.63.21l2.28-.96-.01.01c.37.33.79.63 1.24.89.45.26.91.47 1.39.63v-.02l.31 2.45c.01.25.23.44.48.44h3.12c.25 0 .46-.19.5-.44l.27-2.15c.02-.18.15-.34.32-.4.84-.31 1.64-.79 2.33-1.41l2.28.96c.23.1.5.01.63-.21l1.56-2.7c.13-.22.07-.5-.13-.65l-1.97-1.49c.21-1.01.21-2.04.01-3.02h-.01L20.81 9c.2-.15.26-.43.13-.65l-1.56-2.7a.501.501 0 0 0-.63-.21l-2.27.96.01-.01a7.52 7.52 0 0 0-1.24-.89c-.45-.26-.91-.47-1.39-.63"
      clipRule="evenodd"
    />
    <Path fill={fill} d="M11.51 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M11.51 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  </Svg>
)
