import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <RedditFilled/> ------------------------------------------------------------------------- */

export const RedditFilled = ({
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
      fillRule="evenodd"
      d="M14 6c-.548 0-1 .452-1 1v2a1 1 0 1 1-2 0V7c0-1.652 1.348-3 3-3h2a1 1 0 1 1 0 2h-2Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      d="M17 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20.12 12.59c.99-.17 1.88-1.08 1.88-2.1 0-1.18-.95-2.12-2.11-2.12-.91 0-1.69.64-1.99 1.47.02.02.03.03.05.04.2.13.38.28.55.44.57.5 1.02 1.09 1.37 1.72.05.1.1.21.14.3.04.08.08.16.11.25ZM6.1 9.82c-.3-.83-1.08-1.46-1.99-1.46-1.16 0-2.11.95-2.11 2.13 0 1.03.88 1.94 1.87 2.12.03-.09.07-.19.12-.28.04-.09.09-.2.14-.3a6.7 6.7 0 0 1 1.39-1.73c.17-.16.34-.3.53-.44.02-.01.03-.02.05-.04Z"
    />
    <Path
      fill={fill}
      d="M20.5 14.5c0 3.59-3.8 6.5-8.5 6.5s-8.5-2.91-8.5-6.5c0-.75.16-1.5.49-2.17.04-.1.08-.2.14-.3a6.7 6.7 0 0 1 1.39-1.73c.17-.16.34-.3.53-.44C7.57 8.71 9.68 8 12 8c2.32 0 4.42.71 5.95 1.87.2.13.38.29.55.44.56.5 1.02 1.09 1.36 1.72.06.1.11.2.14.3.34.67.5 1.42.5 2.17Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M15.11 16.64c-.66.76-1.81 1.26-3.11 1.26-1.3 0-2.45-.5-3.11-1.26"
    />
    <Path
      fill={fill}
      d="M14.74 13a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM9.5 13a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M14.74 13a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM9.5 13a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
  </Svg>
)

