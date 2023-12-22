import { aetherSchemaToAirtable } from '@aetherspace/airtable/schemas'
import { airtableBase } from './airtableBase'
import { IconLink } from '../schemas/IconLink'

export const UserIconsTable = aetherSchemaToAirtable('userIcons', airtableBase, IconLink)
