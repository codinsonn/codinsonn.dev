import Airtable from 'airtable'
import { getEnvVar } from 'aetherspace/utils/serverUtils'

/* --- Constants ------------------------------------------------------------------------------- */

const AIRTABLE_API_KEY = getEnvVar('AIRTABLE_API_KEY')
const AIRTABLE_BIO_BASE = getEnvVar('AIRTABLE_BIO_BASE')

export const airtable = new Airtable({ apiKey: AIRTABLE_API_KEY })
export const airtableBase = airtable.base(AIRTABLE_BIO_BASE)
