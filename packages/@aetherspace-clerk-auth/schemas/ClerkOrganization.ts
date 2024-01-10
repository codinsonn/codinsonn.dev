import { z, aetherSchema } from 'aetherspace/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ClerkOrganization: `This is a class that represents an organization. It's returned from the createOrganization and getOrganization methods on the Clerk class instance. More info: https://clerk.com/docs/references/javascript/organization/organization`,
  id: `The unique identifier of the related organization.`,
  name: `The name of the related organization.`,
  slug: `The organization slug. If supplied, it must be unique for the instance.`,
  imageUrl: `Holds the organization logo or default logo.`,
  hasImage: `A getter boolean to check if the organization has an uploaded image. Returns false if Clerk is displaying an avatar for the organization.`,
  membersCount: `The number of members the associated organization contains.`,
  pendingInvitationsCount: `The number of pending invitations to users to join the organization.`,
  adminDeleteEnabled: `A getter boolean to check if the admin of the organization can delete it.`,
  createdAt: `Date of the time the organization was created.`,
  publicMetadata: `Additional information about the organization that can be read through the Frontend API, but written only from the Backend API.`,
}

/** --- ClerkOrganization ---------------------------------------------------------------------- */
/** -i- This is a class that represents an organization. It&#x27;s returned from the createOrganization and getOrganization methods on the Clerk class instance. More info: https://clerk.com/docs/references/javascript/organization/organization */
export const ClerkOrganization = aetherSchema('ClerkOrganization', {
  id: z.string().id().describe(d.id),
  name: z.string().describe(d.name),
  slug: z.string().nullish().describe(d.slug),
  imageUrl: z.string().url().nullish().describe(d.imageUrl),
  hasImage: z.boolean().describe(d.hasImage),
  membersCount: z.number().int().describe(d.membersCount),
  pendingInvitationsCount: z.number().int().describe(d.pendingInvitationsCount),
  adminDeleteEnabled: z.boolean().describe(d.adminDeleteEnabled),
  createdAt: z.date().describe(d.createdAt),
  // publicMetadata: z.object({}).describe(d.publicMetadata),
}).describe(d.ClerkOrganization)

/** -i- This is a class that represents an organization. It&#x27;s returned from the createOrganization and getOrganization methods on the Clerk class instance. More info: https://clerk.com/docs/references/javascript/organization/organization */
export type ClerkOrganization = z.infer<typeof ClerkOrganization>
