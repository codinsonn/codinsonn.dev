import * as React from 'react'
import Svg, { Path, G } from 'react-native-svg'
import { ats, Infer } from 'aetherspace/schemas'

/* --- Schema ---------------------------------------------------------------------------------- */

const PropSchema = ats.schema('BehanceIconProps', {
  width: ats.number().optional().default(24, 'Icon width'),
  height: ats.number().optional().default(24, 'Icon height'),
  fill: ats.color().optional().default('#000000', 'Icon fill color'),
})

/* --- <BehanceIcon/> -------------------------------------------------------------------------- */

const BehanceIcon = ({ fill = '#000000', ...props }: Infer<typeof PropSchema>) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill={fill} {...props}>
    <Path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
  </Svg>
)

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = PropSchema

/* --- Exports --------------------------------------------------------------------------------- */

export default BehanceIcon
