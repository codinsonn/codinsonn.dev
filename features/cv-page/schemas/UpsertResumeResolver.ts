import { z, aetherSchema } from 'aetherspace/schemas'
import { ResumeData } from './ResumeData'
import { MongoUpdateResult } from '@aetherspace/mongoose/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  UpsertResumeArgs: 'Args for the upsertResume() resolver',
  UpsertResumeResponse: 'Response for the upsertResume() resolver',
  slug: 'The slug of the resume to create or update',
}

/** --- UpsertResumeArgs ----------------------------------------------------------------------- */
/** -i- Args for the upsertResume() resolver */
export const UpsertResumeArgs = aetherSchema('UpsertResumeArgs', {
  slug: z.string(),
  authKey: z.string(),
}).describe(d.UpsertResumeArgs)

/** -i- Args for the upsertResume() resolver */
export type TUpsertResumeArgs = z.infer<typeof UpsertResumeArgs>

/** --- UpsertResumeResponse ------------------------------------------------------------------- */
/** -i- Response for the upsertResume() resolver */
export const UpsertResumeResponse = aetherSchema('UpsertResumeResponse', {
  success: z.boolean(),
  upsertResult: MongoUpdateResult,
  upsertedResume: ResumeData,
}).describe(d.UpsertResumeResponse)

/** -i- Response for the upsertResume() resolver */
export type TUpsertResumeResponse = z.infer<typeof UpsertResumeResponse>

/** --- upsertResumeAPIConfig ------------------------------------------------------------------ */
/** -i- Aetherspace API Config for upsertResume() */
export const UpsertResumeAPIConfig = {
  argsSchema: UpsertResumeArgs,
  responseSchema: UpsertResumeResponse,
  apiPath: '/api/resume/[slug]/upsert',
  allowedMethods: ['GET', 'POST'],
}
