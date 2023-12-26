import { z, aetherSchema, createDataBridge } from 'aetherspace/schemas'
import { ResumeData } from './ResumeData'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  GetResumeDataByUserSlugArgs: 'Args for the getResumeDataByUserSlug() resolver',
  GetResumeDataByUserSlugResponse: 'Response for the getResumeDataByUserSlug() resolver',
  slug: `the unique slug for a user's resume. Can be used to find and retrieve the resume data with`,
}

/** --- GetResumeDataByUserSlugArgs ------------------------------------------------------------ */
/** -i- Args for the getResumeDataByUserSlug() resolver */
export const GetResumeDataByUserSlugArgs = aetherSchema('GetResumeDataByUserSlugArgs', {
  slug: z.string().describe(d.slug),
}).describe(d.GetResumeDataByUserSlugArgs)

/** -i- Args for the getResumeDataByUserSlug() resolver */
export type GetResumeDataByUserSlugArgs = z.infer<typeof GetResumeDataByUserSlugArgs>

/** --- GetResumeDataByUserSlugResponse -------------------------------------------------------- */
/** -i- Response for the getResumeDataByUserSlug() resolver */
export const GetResumeDataByUserSlugResponse = ResumeData.describe(d.GetResumeDataByUserSlugResponse) // prettier-ignore

/** -i- Response for the getResumeDataByUserSlug() resolver */
export type GetResumeDataByUserSlugResponse = z.infer<typeof GetResumeDataByUserSlugResponse>

/** --- Data Bridge ---------------------------------------------------------------------------- */
/** -i- API Config for getResumeDataByUserSlug() */
export const GetResumeDataByUserSlugDataBridge = createDataBridge({
  resolverName: 'getResumeDataByUserSlug',
  resolverType: 'query',
  argsSchema: GetResumeDataByUserSlugArgs,
  responseSchema: GetResumeDataByUserSlugResponse,
  apiPath: '/api/resume/[slug]',
  allowedMethods: ['GRAPHQL', 'GET', 'POST'],
})
