import { z, aetherSchema, AetherInput } from 'aetherspace/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  BaseLinkData: `Datastructure used in all sorts of links`,
  id: `the unique identifier for this link`,
  linkUrl: `the url of the link`,
  linkTitle: `an optional name for the link`,
  linkIconKey: `the icon key for the link`,
  sortOrder: `the sort order of the link`,
  userId: `the user id of the user this link belongs to, used for database retrieval`,
  userSlug: `the user slug of the user this link belongs to, used for database retrieval`,
}

/** --- BaseLinkData --------------------------------------------------------------------------- */
/** -i- Datastructure for one social link */
export const BaseLinkData = aetherSchema('BaseLinkData', {
  id: z.string().coerce().id().nullish().describe(d.id),
  linkUrl: z.string().describe(d.linkUrl),
  linkTitle: z.string().nullish().eg('Some link title').describe(d.linkTitle),
  linkIconKey: z.string().nullish().describe(d.linkIconKey),
  sortOrder: z.number().nullish().describe(d.sortOrder),
  // - Links & Search Helpers -
  userId: z.string().nullish().describe(d.userId),
  userSlug: z.string().nullish().describe(d.userSlug),
}).describe(d.BaseLinkData)

/** -i- Datastructure for one social link */
export type TBaseLinkData = AetherInput<typeof BaseLinkData>
