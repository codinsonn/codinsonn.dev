import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <LinkThin/> ----------------------------------------------------------------------------- */

export const LinkThin = ({
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
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m17.78 11.74 3.08-3.08C21.62 7.9 22 6.9 22 5.9c0-1-.38-2-1.14-2.76a3.911 3.911 0 0 0-5.52 0l-3.58 3.59-.8.8-.71.71A3.86 3.86 0 0 0 9.1 11c0 .22.02.43.05.64.01.01.01.03.01.05.04.2.09.39.16.58.18.54.49 1.05.93 1.48.22.22.46.41.71.56"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m6.22 12.26-3.08 3.08C2.38 16.1 2 17.1 2 18.1c0 1 .38 2 1.14 2.76a3.911 3.911 0 0 0 5.52 0l3.58-3.59.8-.8.71-.71A3.86 3.86 0 0 0 14.9 13c0-.22-.02-.43-.05-.64-.01-.01-.01-.03-.01-.05-.04-.2-.09-.39-.16-.58-.18-.54-.49-1.05-.93-1.48a3.72 3.72 0 0 0-.71-.56"
    />
  </Svg>
)

