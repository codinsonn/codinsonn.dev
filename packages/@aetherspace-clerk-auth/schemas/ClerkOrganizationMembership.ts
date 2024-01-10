import { z, aetherSchema } from 'aetherspace/schemas'
import { ClerkPublicUserData } from './ClerkPublicUserData'
import { ClerkOrganization } from './ClerkOrganization'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ClerkOrganizationMembership: `The OrganizationMembership object is the model around an organization membership entity and describes the relationship between users and organizations. More info: https://clerk.com/docs/references/javascript/organization-membership`,
  id: `A unique identifier for this organization membership.`,
  role: `The role of the current user in the organization.`,
  publicUserData: `Public information about the user that this membership belongs to.`,
  publicMetadata: `Custom metadata that are visible to the frontend.`,
  organization: `The Organization object the membership belongs to.`,
  createdAt: `Date of the time the membership was created.`,
  updatedAt: `Date of the time the membership was last updated.`,
}

/** --- ClerkOrganizationMembership ------------------------------------------------------------ */
/** -i- The OrganizationMembership object is the model around an organization membership entity and describes the relationship between users and organizations. More info: https://clerk.com/docs/references/javascript/organization-membership */
export const ClerkOrganizationMembership = aetherSchema('ClerkOrganizationMembership', {
  id: z.string().id().describe(d.id),
  role: z.string().describe(d.role),
  publicUserData: ClerkPublicUserData.describe(d.publicUserData),
  // publicMetadata: z.object({}).describe(d.publicMetadata),
  organization: ClerkOrganization.describe(d.organization),
  createdAt: z.date().describe(d.createdAt),
  updatedAt: z.date().describe(d.updatedAt),
}).describe(d.ClerkOrganizationMembership)

/** -i- The OrganizationMembership object is the model around an organization membership entity and describes the relationship between users and organizations. More info: https://clerk.com/docs/references/javascript/organization-membership */
export type ClerkOrganizationMembership = z.infer<typeof ClerkOrganizationMembership>
