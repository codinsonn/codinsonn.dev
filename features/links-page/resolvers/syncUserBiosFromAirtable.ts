import { SyncUserBiosFromAirtableDataBridge } from '../schemas/SyncUserBiosFromAirtableDataBridge'
import { UserBioTable, UserIconsTable, LinksInBioTable } from '../schemas/tables'
import { UserBioModel, IconLinkModel, LinkInBioModel } from '../schemas/models'
import { aetherResolver, getEnvVar } from 'aetherspace/utils/serverUtils'
import { dbConnect, bulkUpsertMany } from '@aetherspace/mongoose/utils'
import { TMongoBulkWriteResult } from '@aetherspace/mongoose/schemas'

/* --- Constants ------------------------------------------------------------------------------- */

const AIRTABLE_API_KEY = getEnvVar('AIRTABLE_API_KEY')
const AIRTABLE_BIO_BASE = getEnvVar('AIRTABLE_BIO_BASE')

/** --- syncUserBiosFromAirtable() ------------------------------------------------------------- */
/** -i- Syncs all user bio data from Airtable to MongoDB */
export const syncUserBiosFromAirtable = aetherResolver(
  async ({ args, parseArgs, withDefaults, handleError }) => {
    try {
      // Args
      const { authKey } = parseArgs(args)

      // -- Validate --

      if (!AIRTABLE_API_KEY) throw new Error('AIRTABLE_API_KEY is not set')
      if (authKey !== AIRTABLE_API_KEY.slice(0, 8)) throw new Error('Invalid authKey')
      if (!AIRTABLE_BIO_BASE) throw new Error('AIRTABLE_BIO_BASE is not set')

      // -- Fetch --

      const [userIconRecords, userBioRecords, linksInBioRecords] = await Promise.all([
        UserIconsTable.fetchAllRecords(),
        UserBioTable.fetchAllRecords(),
        LinksInBioTable.fetchAllRecords(),
      ])

      // -- Connect --

      await dbConnect()

      // -- Transform --

      const userIcons = userIconRecords.map(UserIconsTable.parseRecord)

      const linksInBio = linksInBioRecords.map(LinksInBioTable.parseRecord)

      const userBios = userBioRecords.map((record) => {
        return UserBioTable.parseFields({
          ...record.fields,
          linksInBio: linksInBio.filter((link) => link.userSlug === record.fields.slug),
          iconLinks: userIcons.filter((icon) => icon.userSlug === record.fields.slug),
        })
      })

      // -- Sync --

      const [syncedIcons, syncedLinks, syncedBios] = await Promise.all([
        bulkUpsertMany(IconLinkModel, userIcons, (doc) => ({ userSlug: doc.userSlug, id: doc.id })),
        bulkUpsertMany(LinkInBioModel, linksInBio, (doc) => ({ userSlug: doc.userSlug, id: doc.id })), // prettier-ignore
        bulkUpsertMany(UserBioModel, userBios, (doc) => ({ slug: doc.slug })),
      ])

      // -- Respond --

      const countBulkEdits = (bulkEditResults: TMongoBulkWriteResult) => {
        const { insertedCount, matchedCount, modifiedCount, upsertedCount } = bulkEditResults
        return insertedCount + modifiedCount || matchedCount + upsertedCount
      }

      const syncedSlugs = userBios.map(({ slug }) => slug)
      const syncedBiosCount = countBulkEdits(syncedBios)
      const syncedIconsCount = countBulkEdits(syncedIcons)
      const syncedLinksCount = countBulkEdits(syncedLinks)
      const syncedCount = syncedBiosCount + syncedIconsCount + syncedLinksCount

      return withDefaults({
        success: syncedCount > 0,
        syncedCount,
        syncedSlugs,
        syncedIcons,
        syncedLinks,
        syncedBios,
      })
    } catch (err) {
      throw handleError(err)
    }
  },
  SyncUserBiosFromAirtableDataBridge
)
