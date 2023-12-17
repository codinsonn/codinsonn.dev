import { createMongooseDataModel } from '@aetherspace/mongoose/schemas'
import { LinkInBio } from '../schemas/LinkInBio'

export const LinkInBioDataModel = createMongooseDataModel(LinkInBio)
