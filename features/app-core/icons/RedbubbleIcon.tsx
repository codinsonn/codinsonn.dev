import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { z, aetherSchema } from 'aetherspace/schemas'

/* --- Schema ---------------------------------------------------------------------------------- */

const PropSchema = aetherSchema('RedbubbleIconProps', {
  width: z.number().optional().default(24).describe('Icon width'),
  height: z.number().optional().default(24).describe('Icon height'),
  fill: z.string().color().optional().default('#DE1420').describe('Icon fill color'),
})

/* --- <RedbubbleIcon/> ------------------------------------------------------------------------ */

const RedbubbleIcon = (props: z.infer<typeof PropSchema>) => {
  // Props
  const svgProps = PropSchema.parse(props)
  const { fill } = svgProps
  // Render
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <Path
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12S18.63 0 12 0zm1.114 16.002V7.974a.32.32 0 0 1 .32-.32H16.4c2.226 0 2.693 1.31 2.693 2.408 0 .636-.169 1.14-.504 1.511.816.337 1.256 1.096 1.256 2.194 0 1.601-1.201 2.557-3.212 2.557h-3.199a.321.321 0 0 1-.32-.322zm-.808-.001c0 .177-.142.32-.319.322l.002.001H5.345a.32.32 0 0 1-.32-.32v-8.03a.32.32 0 0 1 .32-.32h3.103c1.939 0 3.096 1.043 3.096 2.791 0 1.163-.585 2.077-1.527 2.448l2.21 2.897a.32.32 0 0 1 .079.211z"
        fill={fill}
      />
    </Svg>
  )
}

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = PropSchema.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default RedbubbleIcon
