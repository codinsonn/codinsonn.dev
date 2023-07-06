import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <PhotoAlbumThin/> ----------------------------------------------------------------------- */

export const PhotoAlbumThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.41 9.59C20.04 9.21 19.53 9 19 9H9c-.53 0-1.04.21-1.41.59-.37.38-.59.88-.59 1.41v6c0 .53.21 1.04.59 1.41.38.37.88.59 1.41.59h10c.53 0 1.04-.21 1.41-.59.37-.38.59-.88.59-1.41v-6c0-.53-.21-1.04-.59-1.41Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.41 5.59C16.04 5.21 15.53 5 15 5H5c-.53 0-1.04.21-1.41.59C3.22 5.97 3 6.47 3 7v6c0 .53.21 1.04.59 1.41.38.37.88.59 1.41.59h2v-4c0-.53.21-1.04.59-1.41C7.96 9.21 8.47 9 9 9h8V7c0-.53-.21-1.04-.59-1.41ZM14 12c-.53 0-1.04.21-1.41.59-.38.37-.59.88-.59 1.41 0 .53.21 1.04.59 1.41.38.37.88.59 1.41.59.53 0 1.04-.21 1.41-.59.37-.38.59-.88.59-1.41 0-.53-.21-1.04-.59-1.41-.37-.38-.88-.59-1.41-.59Z"
    />
  </Svg>
)
