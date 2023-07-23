import Airtable from 'airtable'
// Schemas
import { SyncUserBiosFromAirtableAPIConfig } from '../schemas/SyncUserBiosFromAirtableResolver' // prettier-ignore
// Models
import { UserBioModel, IconLinkModel, LinkInBioModel } from '../schemas/models'
// Utils
import { aetherResolver, getEnvVar } from 'aetherspace/utils/serverUtils'
import { fetchAllAirtableRecords } from '@aetherspace/airtable/utils'
import { dbConnect, bulkUpsertMany } from '@aetherspace/mongoose/utils'

/* --- Constants ------------------------------------------------------------------------------- */

const AIRTABLE_API_KEY = getEnvVar('AIRTABLE_API_KEY')
const AIRTABLE_BIO_BASE = getEnvVar('AIRTABLE_BIO_BASE')

/** --- syncUserBiosFromAirtable --------------------------------------------------------------- */
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

      // -- Constants --

      const airtable = new Airtable({ apiKey: AIRTABLE_API_KEY })
      const airtableBase = airtable.base(AIRTABLE_BIO_BASE)

      // -- Fetch --

      const [userIconRecords, userBioRecords, linksInBioRecords] = await Promise.all([
        fetchAllAirtableRecords(airtableBase, 'userIcons', IconLinkModel.aetherSchema),
        fetchAllAirtableRecords(airtableBase, 'userBio', UserBioModel.aetherSchema),
        fetchAllAirtableRecords(airtableBase, 'userLinks', LinkInBioModel.aetherSchema),
      ])

      // -- Connect --

      await dbConnect()

      // -- Transform --

      const USER_IDS_TO_SLUGS = userBioRecords.reduce(
        (acc, record) => ({
          ...acc,
          [record.id]: record.fields.slug,
        }),
        {} as Record<string, string>
      )

      const userIcons = userIconRecords.map((record) => ({
        id: record.fields.id, // @ts-ignore
        user: USER_IDS_TO_SLUGS[record.fields.user[0]],
        iconComponent: record.fields.iconComponent?.[0],
        link: record.fields.link,
        sortOrder: record.fields.sortOrder,
        extraClasses: record.fields.extraClasses?.[0] || '',
      }))

      const linksInBio = linksInBioRecords.map((record) => ({
        id: record.fields.id, // @ts-ignore
        user: USER_IDS_TO_SLUGS[record.fields.user[0]],
        title: record.fields.title,
        subTitle: record.fields.subTitle,
        link: record.fields.link,
        imageUrl: record.fields.imageUrl,
        iconComponent: record.fields.iconComponent?.[0] || '',
        isFeatured: record.fields.isFeatured,
      }))

      const userBios = userBioRecords.map((record) => ({
        ...record.fields,
        iconLinks: userIcons.filter((icon) => icon.user === record.fields.slug),
      }))

      // -- Sync --

      const [syncedIcons, syncedLinks, syncedBios] = await Promise.all([
        bulkUpsertMany(IconLinkModel, userIcons, (doc) => ({ user: doc.user, id: doc.id })),
        bulkUpsertMany(LinkInBioModel, linksInBio, (doc) => ({ user: doc.user, id: doc.id })),
        bulkUpsertMany(UserBioModel, userBios, (doc) => ({ slug: doc.slug })),
      ])

      // -- Respond --

      const syncedSlugs = userBios.map(({ slug }) => slug)
      const syncedBiosCount = (syncedBios.insertedCount + syncedBios.modifiedCount) || syncedBios.matchedCount // prettier-ignore
      const syncedIconsCount = (syncedIcons.insertedCount + syncedIcons.modifiedCount) || syncedIcons.matchedCount // prettier-ignore
      const syncedLinksCount = (syncedLinks.insertedCount + syncedLinks.modifiedCount) || syncedLinks.matchedCount // prettier-ignore
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
  SyncUserBiosFromAirtableAPIConfig
)
