import { aetherSchemaToMongoose } from '@aetherspace/mongoose/schemas'
// Schemas
import { LinkInBio } from './LinkInBio'

/* --- Models ---------------------------------------------------------------------------------- */

export const LinkInBioModel = aetherSchemaToMongoose(LinkInBio)
