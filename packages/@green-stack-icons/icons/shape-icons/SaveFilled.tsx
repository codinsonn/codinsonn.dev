import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <SaveFilled/> --------------------------------------------------------------------------- */

export const SaveFilled = ({
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
      d="M16.52 2H4c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V7.35c0-.23-.08-.45-.22-.62L17.3 2.38a1 1 0 0 0-.78-.38Z"
    />
    <Path stroke={stroke} strokeLinejoin="round" d="M6 2v8h9V2" />
    <Path
      fill={fill}
      d="M14.5 10h-8c-.28 0-.5-.22-.5-.5V2h9v7.5c0 .28-.22.5-.5.5Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      d="M12 5h-1v2h1V5Z"
      clipRule="evenodd"
    />
  </Svg>
)

