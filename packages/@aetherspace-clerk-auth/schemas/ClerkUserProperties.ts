import { z, aetherSchema } from 'aetherspace/schemas'
import { ClerkUserEmailAdress } from './ClerkUserEmailAdress'
import { ClerkUserPhoneNumber } from './ClerkUserPhoneNumber'
import { ClerkExternalAccount } from './ClerkExternalAccount'
import { ClerkOrganizationMembership } from './ClerkOrganizationMembership'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ClerkUserProperties: `The User object holds all of the information for a single user of your application and provides a set of methods to manage their account. Each user has a unique authentication identifier which might be their email address, phone number, or a username. More info: https://clerk.com/docs/references/javascript/user/user#properties`,
  id: `A unique identifier for the user, assigned by clerk`,
  firstName: `The user's first name.`,
  lastName: `The user's last name.`,
  fullName: `The user's full name.`,
  username: `The user's username.`,
  imageUrl: `Holds the users profile image or avatar.`,
  hasImage: `A getter boolean to check if the user has uploaded an image or one was copied from OAuth. Returns false if Clerk is displaying an avatar for the user.`,
  primaryEmailAddress: `Information about the user's primary email address.`,
  primaryEmailAddressId: `The unique identifier for the EmailAddress that the user has set as primary.`,
  emailAdresses: `An array of all the EmailAddress objects associated with the user. Includes the primary.`,
  hasVerifiedEmailAddress: `A getter boolean to check if the user has verified an email address.`,
  primaryPhoneNumber: `Information about the user's primary phone number.`,
  primaryPhoneNumberId: `The unique identifier for the PhoneNumber that the user has set as primary.`,
  phoneNumbers: `An array of all the PhoneNumber objects associated with the user. Includes the primary.`,
  hasVerifiedPhoneNumber: `A getter boolean to check if the user has verified a phone number.`,
  externalAccounts: `An array of all the ExternalAccount objects associated with the user via OAuth. Note: This includes both verified & unverified external accounts.`,
  verifiedExternalAccounts: `A getter for the user's list of verified external accounts.`,
  unverifiedExternalAccounts: `A getter for the user's list of unverified external accounts.`,
  samlAccounts: `An experimental list of saml accounts associated with the user.`,
  organizationMemberships: `A list of OrganizationMemberships representing the list of organizations the user is member with.`,
  passwordEnabled: `A boolean indicating whether the user has a password on their account.`,
  totpEnabled: `A boolean indicating whether the user has enabled TOTP by generating a TOTP secret and verifying it via an authenticator app.`,
  twoFactorEnabled: `A boolean indicating whether the user has enabled two-factor authentication.`,
  backupCodeEnabled: `A boolean indicating whether the user has enabled Backup codes.`,
  createOrganizationEnabled: `A boolean indicating whether the organization creation is enabled for the user or not.`,
  deleteSelfEnabled: `A boolean indicating whether the user is able to delete their own account or not.`,
  publicMetadata: `Metadata that can be read from the Frontend API and Backend API and can be set only from the Backend API: https://clerk.com/docs/reference/backend-api`,
  privateMetadata: `Metadata that can be read and set only from the Backend API: https://clerk.com/docs/reference/backend-api`,
  unsafeMetadata: `Metadata that can be read and set from the Frontend API. One common use case for this attribute is to implement custom fields that will be attached to the User object. Please note that there is also an unsafeMetadata attribute in the SignUp object. The value of that field will be automatically copied to the user's unsafe metadata once the sign up is complete.`,
  lastSignInAt: `Date when the user last signed in. May be empty if the user has never signed in.`,
  createdAt: `Date when the user was first created.`,
  updatedAt: `Date when the user was last updated.`,
}

/** --- ClerkUserProperties -------------------------------------------------------------------- */
/** -i- https://clerk.com/docs/references/javascript/user/user#properties */
export const ClerkUserProperties = aetherSchema('ClerkUserProperties', {
  id: z.string().id().describe(d.id),
  firstName: z.string().nullish().describe(d.firstName),
  lastName: z.string().nullish().describe(d.lastName),
  fullName: z.string().nullish().describe(d.fullName),
  username: z.string().nullish().describe(d.username),
  imageUrl: z.string().url().nullish().describe(d.imageUrl),
  hasImage: z.boolean().nullish().describe(d.hasImage),
  primaryEmailAddress: ClerkUserEmailAdress.nullish().describe(d.primaryEmailAddress),
  primaryEmailAddressId: z.string().id().nullish().describe(d.primaryEmailAddressId),
  emailAddresses: ClerkUserEmailAdress.array().describe(d.emailAdresses),
  hasVerifiedEmailAddress: z.boolean().nullish().describe(d.hasVerifiedEmailAddress),
  primaryPhoneNumber: ClerkUserPhoneNumber.nullish().describe(d.primaryPhoneNumber),
  primaryPhoneNumberId: z.string().id().nullish().describe(d.primaryPhoneNumberId),
  phoneNumbers: ClerkUserPhoneNumber.array().describe(d.phoneNumbers),
  hasVerifiedPhoneNumber: z.boolean().nullish().describe(d.hasVerifiedPhoneNumber),
  externalAccounts: ClerkExternalAccount.array().describe(d.externalAccounts),
  verifiedExternalAccounts: ClerkExternalAccount.array().nullish().describe(d.verifiedExternalAccounts), // prettier-ignore
  unverifiedExternalAccounts: ClerkExternalAccount.array().nullish().describe(d.unverifiedExternalAccounts), // prettier-ignore
  // samlAccounts: z.object({}).nullish().describe(d.samlAccounts),
  organizationMemberships: ClerkOrganizationMembership.array().nullish().describe(d.organizationMemberships), // prettier-ignore
  passwordEnabled: z.boolean().nullish().describe(d.passwordEnabled),
  totpEnabled: z.boolean().nullish().describe(d.totpEnabled),
  twoFactorEnabled: z.boolean().nullish().describe(d.twoFactorEnabled),
  backupCodeEnabled: z.boolean().nullish().describe(d.backupCodeEnabled),
  createOrganizationEnabled: z.boolean().nullish().describe(d.createOrganizationEnabled),
  deleteSelfEnabled: z.boolean().nullish().describe(d.deleteSelfEnabled),
  // publicMetadata: z.object({}).nullish().describe(d.publicMetadata),
  // privateMetadata: z.object({}).nullish().describe(d.privateMetadata),
  // unsafeMetadata: z.object({}).nullish().describe(d.unsafeMetadata),
  lastSignInAt: z.date().nullish().describe(d.lastSignInAt),
  createdAt: z.date().describe(d.createdAt),
  updatedAt: z.date().describe(d.updatedAt),
}).describe(d.ClerkUserProperties)

/** -i- https://clerk.com/docs/references/javascript/user/user#properties */
export type ClerkUserProperties = z.infer<typeof ClerkUserProperties>
