import { z, aetherSchema } from 'aetherspace/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ClerkPublicUserData: `Information about the user that's publicly available: https://clerk.com/docs/references/javascript/types/public-user-data`,
  firstName: `The user's first name.`,
  lastName: `The user's last name.`,
  imageUrl: `Holds the users profile image or avatar.`,
  hasImage: `A getter boolean to check if the user has uploaded an image or one was copied from OAuth. Returns false if Clerk is displaying an avatar for the user.`,
  identifier: `The user's identifier.`,
  userId: `A unique identifier for the user, assigned by clerk`,
}

/** --- ClerkPublicUserData -------------------------------------------------------------------- */
/** -i- Information about the user that&#x27;s publicly available: https://clerk.com/docs/references/javascript/types/public-user-data */
export const ClerkPublicUserData = aetherSchema('ClerkPublicUserData', {
  firstName: z.string().nullish().describe(d.firstName),
  lastName: z.string().nullish().describe(d.lastName),
  imageUrl: z.string().url().nullish().describe(d.imageUrl),
  hasImage: z.boolean().describe(d.hasImage),
  identifier: z.string().describe(d.identifier),
  userId: z.string().id().nullish().describe(d.userId),
}).describe(d.ClerkPublicUserData)

/** -i- Information about the user that&#x27;s publicly available: https://clerk.com/docs/references/javascript/types/public-user-data */
export type ClerkPublicUserData = z.infer<typeof ClerkPublicUserData>
