import { createMongooseDataModel } from '@aetherspace/mongoose/schemas/createMongooseDataModel'
import { ResumeData } from '../schemas/ResumeData'

/* --- MongoDB Models -------------------------------------------------------------------------- */

export const ResumeDataModel = createMongooseDataModel(ResumeData)
