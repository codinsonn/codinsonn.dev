import { aetherSchemaToAirtable } from '@aetherspace/airtable/schemas'
import { airtableBase } from './airtableBase'
import { LinkInBio } from '../schemas/LinkInBio'

export const LinkInBioTable = aetherSchemaToAirtable('userLinks', airtableBase, LinkInBio)
