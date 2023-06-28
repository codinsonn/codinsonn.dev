import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <AnchorFilled/> ------------------------------------------------------------------------- */

export const AnchorFilled = ({
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
      d="M13.32 19.89c-.87.17-1.77.16-2.64-.01l-.67-.13.01.01L12 22l1.98-2.24-.66.13Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="m6.991 18.146 3.88.753c.752.146 1.52.153 2.256.01l3.56-.701L12 23.51l-2.709-3.065-2.3-2.3Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M12 5a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M8 11a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM3.943 12.364a1 1 0 0 1 1.153.82A6.999 6.999 0 0 0 12 19a6.999 6.999 0 0 0 6.904-5.817 1 1 0 1 1 1.972.334A8.999 8.999 0 0 1 12 21a8.999 8.999 0 0 1-8.876-7.483 1 1 0 0 1 .82-1.153Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="m20.306 10.2 2.653 6.08-2.78-1.79c-.208-.133-.489-.187-.779-.185a2.36 2.36 0 0 0-.424.042l-.014.003-3.289.844 4.633-4.994ZM3.695 10.2l4.632 4.994-3.289-.844-.013-.003a2.359 2.359 0 0 0-.425-.042c-.29-.002-.57.052-.779.186l-2.78 1.79L3.695 10.2Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="M12 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
  </Svg>
)

