import { z, aetherSchema } from 'aetherspace/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  id: `Id of icon link`,
  user: `Slug of the user this icon link belongs to`,
  iconKey: `Icon key`,
  iconComponent: `Icon component name`,
  link: `Link attached to the icon`,
  sortOrder: `Sort order of icon`,
  extraClasses: `Extra classes to add to icon`,
}

/** --- IconLink ------------------------------------------------------------------------------- */
/** -i- Single Source of Truth for link-in-bio page's icon links */
export const IconLink = aetherSchema('IconLink', {
  id: z.string().id().describe(d.id),
  user: z.string().optional().describe(d.id),
  iconKey: z.string().optional().describe(d.iconKey),
  iconComponent: z.string().describe(d.iconComponent),
  link: z.string().describe(d.link),
  sortOrder: z.number().optional().describe(d.sortOrder),
  extraClasses: z.string().optional().describe(d.extraClasses),
})

/** -i- Single Source of Truth for link-in-bio page's icon links */
export type TIconLink = z.infer<typeof IconLink>
