import { aetherSchemaToMongoose } from '@aetherspace/mongoose/schemas'
// Schemas
import { ResumeData } from './ResumeData'

/* --- MongoDB Models -------------------------------------------------------------------------- */

export const ResumeDataModel = aetherSchemaToMongoose(ResumeData)
