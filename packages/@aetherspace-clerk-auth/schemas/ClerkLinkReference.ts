import { z, aetherSchema } from 'aetherspace/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ClerkLinkReference: `An object containing information about any other identification that might be linked to.`,
  id: `A unique identifier for the linked resource.`,
  type: `The type of linked resource.`,
}

/** --- ClerkLinkReference --------------------------------------------------------------------- */
/** -i- An object containing information about any other identification that might be linked to. */
export const ClerkLinkReference = aetherSchema('ClerkLinkReference', {
  id: z.string().id().describe(d.id),
  type: z.string().describe(d.type),
}).describe(d.ClerkLinkReference)

/** -i- An object containing information about any other identification that might be linked to. */
export type ClerkLinkReference = z.infer<typeof ClerkLinkReference>
