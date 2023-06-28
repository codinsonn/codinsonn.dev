import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <GoogleTranslateFilled/> ---------------------------------------------------------------- */

export const GoogleTranslateFilled = ({
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
      d="M16 10a1 1 0 0 1 .894.553l5 10a1 1 0 1 1-1.788.894L18.882 19h-5.764l-1.224 2.447a1 1 0 1 1-1.788-.894l5-10A1 1 0 0 1 16 10Zm-1.882 7h3.764L16 13.236 14.118 17ZM9 2a1 1 0 0 1 1 1v1h5a1 1 0 1 1 0 2h-1.423a18.934 18.934 0 0 1-3.29 7.285c.156.176.317.35.481.52a1 1 0 1 1-1.436 1.39 18.452 18.452 0 0 1-.332-.35 19.052 19.052 0 0 1-5.555 4.18 1 1 0 1 1-.89-1.79 17.054 17.054 0 0 0 5.159-3.95A19.293 19.293 0 0 1 5.49 9.392a1 1 0 1 1 1.84-.784A17.333 17.333 0 0 0 9 11.645 16.934 16.934 0 0 0 11.525 6H3a1 1 0 1 1 0-2h5V3a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
  </Svg>
)

