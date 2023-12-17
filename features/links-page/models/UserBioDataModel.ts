import { createMongooseDataModel } from '@aetherspace/mongoose/schemas'
import { UserBio } from '../schemas/UserBio'

export const UserBioDataModel = createMongooseDataModel(UserBio)
