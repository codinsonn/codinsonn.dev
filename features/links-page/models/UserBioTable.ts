import { aetherSchemaToAirtable } from '@aetherspace/airtable/schemas'
import { airtableBase } from './airtableBase'
import { UserBio } from '../schemas/UserBio'

export const UserBioTable = aetherSchemaToAirtable('userBio', airtableBase, UserBio)
