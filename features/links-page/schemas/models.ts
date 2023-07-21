import { aetherSchemaToMongoose } from '@aetherspace/mongoose/schemas'
// Schemas
import { LinkInBio } from './LinkInBio'

/* --- MongoDB Models -------------------------------------------------------------------------- */

export const LinkInBioModel = aetherSchemaToMongoose(LinkInBio)
