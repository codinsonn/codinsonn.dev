import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { z, aetherSchema, AetherProps } from 'aetherspace/schemas'

/* --- Schema ---------------------------------------------------------------------------------- */

const PropSchema = aetherSchema('RedbubbleIconProps', {
  size: z.number().default(24).describe('Icon dimensions, maps to both width and height'),
  fill: z.string().color().default('#000000').describe('Icon fill color'),
})

/* --- <DevIcon/> ------------------------------------------------------------------------------ */

const DevIcon = (props: AetherProps<typeof PropSchema>) => {
  // Props
  const { size, fill, ...svgProps } = PropSchema.applyDefaults(props)
  // Render
  return (
    <Svg viewBox="0 0 448 512" width={size} height={size} {...svgProps}>
      <Path
        d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"
        fill={fill}
      />
    </Svg>
  )
}

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = PropSchema.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default DevIcon
