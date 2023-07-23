import { aetherSchemaToMongoose } from '@aetherspace/mongoose/schemas'
// Schemas
import { UserBio } from './UserBio'
import { IconLink } from './IconLink'
import { LinkInBio } from './LinkInBio'

/* --- MongoDB Models -------------------------------------------------------------------------- */

export const UserBioModel = aetherSchemaToMongoose(UserBio)
export const IconLinkModel = aetherSchemaToMongoose(IconLink)
export const LinkInBioModel = aetherSchemaToMongoose(LinkInBio)
