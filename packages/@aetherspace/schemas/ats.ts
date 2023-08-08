import { z, aetherSchema } from './aetherSchemas'

/* --- Documentation --------------------------------------------------------------------------- */

const d = {
  tw: `Tailwind CSS class name(s) or array of class names. Supports all styles available in React-Native.\n\nUses twrnc (https://www.npmjs.com/package/twrnc) under the hood to transform styles into a style object.\n\nAliases for this prop: "class", "className".\n\n`,
}

export const AetherStyleProp = z.string().optional().describe(d.tw)

/** --- AetherTailwindProp --------------------------------------------------------------------- */
/** -i- A common prop type for Aetherspace Primitives used for styling through the 'tw', 'class' or 'className' props */
export const AetherTailwindProp = z.union([
  z.string(),
  z.array(z.union([z.string(), z.literal(0)]).nullish()),
])

/** -i- A common prop type for Aetherspace Primitives used for styling through the 'tw', 'class' or 'className' props */
export type TAetherTailwindProp = z.infer<typeof AetherTailwindProp>

/** --- AetherStyleProps ----------------------------------------------------------------------- */
/** -i- All common extra props used in Aetherspace Primitives for styling */
export const AetherStyleProps = aetherSchema('AetherStyleProps', {
  tw: AetherTailwindProp.optional(),
  class: AetherTailwindProp.optional(),
  className: AetherTailwindProp.optional(),
  twID: z.string().optional(),
})

/** -i- All common extra props used in Aetherspace Primitives for styling */
export type TAetherStyleProps = z.infer<typeof AetherStyleProps>
