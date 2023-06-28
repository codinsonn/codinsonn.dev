import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <NotepadFilled/> ------------------------------------------------------------------------ */

export const NotepadFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
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
      d="M16.6 22H3c-.5 0-1-.5-1-1V3c0-.5.5-1 1-1h18c.5 0 1 .5 1 1v13.6c0 .3-.1.5-.3.7l-4.4 4.4c-.2.2-.4.3-.7.3Z"
    />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M22 16h-6v6"
    />
    <Path
      fill={fill}
      d="M16.6 22c.3 0 .5-.1.7-.3l4.4-4.4c.2-.2.3-.4.3-.7V16h-6v6h.6Z"
    />
  </Svg>
)

