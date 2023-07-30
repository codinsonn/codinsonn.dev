import Airtable from 'airtable'
// Schemas
import { UserBio, IconLink, LinkInBio } from './index'
// Utils
import { aetherSchemaToAirtable } from '@aetherspace/airtable/schemas'
import { getEnvVar } from 'aetherspace/utils/serverUtils'

/* --- Constants ------------------------------------------------------------------------------- */

const AIRTABLE_API_KEY = getEnvVar('AIRTABLE_API_KEY')
const AIRTABLE_BIO_BASE = getEnvVar('AIRTABLE_BIO_BASE')

const airtable = new Airtable({ apiKey: AIRTABLE_API_KEY })
const airtableBase = airtable.base(AIRTABLE_BIO_BASE)

/* --- Tables ---------------------------------------------------------------------------------- */

export const UserBioTable = aetherSchemaToAirtable('userBio', airtableBase, UserBio)
export const UserIconsTable = aetherSchemaToAirtable('userIcons', airtableBase, IconLink)
export const LinksInBioTable = aetherSchemaToAirtable('userLinks', airtableBase, LinkInBio)
