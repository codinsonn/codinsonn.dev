import { z, aetherSchema, createDataBridge } from 'aetherspace/schemas'
import { MongoBulkWriteResult } from '@aetherspace/mongoose/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  SyncUserBiosFromAirtableArgs: `Args for the syncUserBiosFromAirtable() resolver`,
  SyncUserBiosFromAirtableResponse: `Response for the syncUserBiosFromAirtable() resolver`,
  authKey: `Auth key for the syncUserBiosFromAirtable() resolver, first 8 chars of the AIRTABLE_API_KEY`,
  authKeyRequired: `You need a valid authKey for this resolver to work.`,
  success: `Whether or not the syncUserBiosFromAirtable() resolver succeeded`,
  syncedCount: `The number of UserBios synced from Airtable`,
  syncedSlugs: `The slugs of the UserBios synced from Airtable`,
  syncedData: `All UserBio data synced from Airtable`,
}

/** --- SyncUserBiosFromAirtableArgs ----------------------------------------------------------- */
/** -i- Args for the syncUserBiosFromAirtable() resolver */
export const SyncUserBiosFromAirtableArgs = aetherSchema('SyncUserBiosFromAirtableArgs', {
  authKey: z.string({ required_error: d.authKeyRequired }).max(8).describe(d.authKey),
}).describe(d.SyncUserBiosFromAirtableArgs)

/** -i- Args for the syncUserBiosFromAirtable() resolver */
export type SyncUserBiosFromAirtableArgs = z.infer<typeof SyncUserBiosFromAirtableArgs>

/** --- SyncUserBiosFromAirtableResponse ------------------------------------------------------- */
/** -i- Response for the syncUserBiosFromAirtable() resolver */
export const SyncUserBiosFromAirtableResponse = aetherSchema('SyncUserBiosFromAirtableResponse', {
  success: z.boolean(),
  syncedCount: z.number(),
  syncedSlugs: z.array(z.string()),
  syncedIcons: MongoBulkWriteResult,
  syncedLinks: MongoBulkWriteResult,
  syncedBios: MongoBulkWriteResult,
}).describe(d.SyncUserBiosFromAirtableResponse)

/** -i- Response for the syncUserBiosFromAirtable() resolver */
export type SyncUserBiosFromAirtableResponse = z.infer<typeof SyncUserBiosFromAirtableResponse>

/** --- syncUserBiosFromAirtableDataBridge ----------------------------------------------------- */
/** -i- Aetherspace API Config for syncUserBiosFromAirtable() */
export const SyncUserBiosFromAirtableDataBridge = createDataBridge({
  resolverName: 'syncUserBiosFromAirtable',
  argsSchema: SyncUserBiosFromAirtableArgs,
  responseSchema: SyncUserBiosFromAirtableResponse,
  apiPath: '/api/links/syncs/airtable',
  allowedMethods: ['GET', 'POST'],
  graphqlQuery: ``,
})
