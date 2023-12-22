import React from 'react'
import { useAetherRoute } from 'aetherspace/navigation'
import { z, aetherSchema, AetherProps, createDataBridge } from 'aetherspace/schemas'
import { GetResumeDataByUserSlugDataBridge } from '../schemas/GetResumeDataByUserSlugDataBridge'
import { ResumeData } from '../schemas/ResumeData'
import { dummyResumeData } from '../mocks/resumeData.mock'
import { View } from 'aetherspace/primitives'
import { H1, H2 } from 'aetherspace/html-elements'
import { ResumeContactSection } from '../components/ResumeContactSection'
import { ResumeEntry } from '../components/ResumeEntry'
import { ResumeIntroCard } from '../components/ResumeIntroCard'
import { ResumeSkeleton } from '../components/ResumeSkeleton'
import { twStyled } from 'aetherspace/styles'
import { uppercaseFirstChar } from 'aetherspace/utils'

/* --- Schemas & Types ------------------------------------------------------------------------- */

const d = {
  slug: 'Slug of the resume data to fetch if data is not in props.',
}

const ResumeScreenParams = aetherSchema('ResumeScreenParams', {
  slug: z.string().optional().describe(d.slug),
})

const ResumeScreenProps = ResumeData.extendSchema('ResumeScreenProps', {
  params: ResumeScreenParams.optional(),
  segment: z.string().optional(),
}).example({
  params: { slug: 'codinsonn' },
  ...dummyResumeData,
})

export type ResumeScreenParams = AetherProps<typeof ResumeScreenParams>

export type ResumeScreenProps = AetherProps<typeof ResumeScreenProps>

/* --- Data Fetching Bridge -------------------------------------------------------------------- */

export const screenConfig = createDataBridge({
  ...GetResumeDataByUserSlugDataBridge,
  paramsSchema: ResumeScreenParams,
  propsSchema: ResumeScreenProps,
  backgroundColor: '#111827',
})

/* --- <ResumeScreen/> ------------------------------------------------------------------------- */

export const ResumeScreen = (props: ResumeScreenProps) => {
  // Props & Data
  const [screenData, { error }] = useAetherRoute(props, screenConfig)
  const {
    generalData,
    contactLinks,
    projects,
    sideProjects,
    writing,
    speaking,
    awards,
    workExperience,
    volunteering,
    education,
    ctaSection,
  } = screenData

  // Vars
  const showContactLinks = contactLinks && contactLinks.length > 0
  const showProjects = projects && projects.length > 0
  const showSideProjects = sideProjects && sideProjects.length > 0
  const showWriting = writing && writing.length > 0
  const showSpeaking = speaking && speaking.length > 0
  const showAwards = awards && awards.length > 0
  const showWorkExperience = workExperience && workExperience.length > 0
  const showVolunteering = volunteering && volunteering.length > 0
  const showEducation = education && education.length > 0
  const showCtaSection = ctaSection && ctaSection.ctaLinks.length > 0

  // -- Guards --

  if (error) {
    return (
      <View tw="w-full h-full items-center justify-center">
        <H1 tw="text-red-500">Error: {error.message}</H1>
      </View>
    )
  }

  // -- Loading --

  if (!generalData) {
    return (
      <StScreenContainer>
        <StResumeContainer>
          <ResumeSkeleton />
        </StResumeContainer>
      </StScreenContainer>
    )
  }

  // -- Render --

  return (
    <StScreenContainer>
      <StResumeContainer>
        <ResumeIntroCard {...generalData} />

        {showContactLinks && (
          <>
            <Spacing tw="h-14" />
            <ResumeContactSection contactLinks={contactLinks} />
          </>
        )}

        {showProjects && (
          <>
            <Spacing tw="h-12" />
            <StResumeSection>
              <H2 className="mb-1 body-sm-regular leading-6 text-secondary">Projects</H2>
              {projects.map(({ title, year, linkUrl, client, description }) => (
                <ResumeEntry
                  key={title}
                  sideLabel={year!}
                  title={[title, client].filter(Boolean).join(' at ')}
                  linkUrl={linkUrl}
                  description={description}
                />
              ))}
            </StResumeSection>
          </>
        )}

        {showSideProjects && (
          <>
            <Spacing tw="h-12" />
            <StResumeSection>
              <H2 className="mb-1 body-sm-regular leading-6 text-secondary">Side Projects</H2>
              {sideProjects.map(({ title, year, linkUrl, client, description }) => (
                <ResumeEntry
                  key={title}
                  sideLabel={year!}
                  title={[title, client].filter(Boolean).join(' at ')}
                  linkUrl={linkUrl}
                  description={description}
                />
              ))}
            </StResumeSection>
          </>
        )}

        {showWriting && (
          <>
            <Spacing tw="h-12" />
            <StResumeSection>
              <H2 className="mb-1 body-sm-regular leading-6 text-secondary">Writing</H2>
              {writing.map(({ title, year, linkUrl, publisher, description }) => (
                <ResumeEntry
                  key={title}
                  sideLabel={year!}
                  title={[title, publisher].filter(Boolean).join(', ')}
                  linkUrl={linkUrl}
                  description={description}
                />
              ))}
            </StResumeSection>
          </>
        )}

        {showSpeaking && (
          <>
            <Spacing tw="h-12" />
            <StResumeSection>
              <H2 className="mb-1 body-sm-regular leading-6 text-secondary">Speaking</H2>
              {speaking.map(({ title, year, linkUrl, event, location, description }) => (
                <ResumeEntry
                  key={title}
                  sideLabel={year!}
                  title={[title, event].filter(Boolean).join(' at ')}
                  subTitle={location}
                  linkUrl={linkUrl}
                  description={description}
                />
              ))}
            </StResumeSection>
          </>
        )}

        {showAwards && (
          <>
            <Spacing tw="h-12" />
            <StResumeSection>
              <H2 className="mb-1 body-sm-regular leading-6 text-secondary">Awards</H2>
              {awards.map(({ title, year, linkUrl, presentedBy, description }) => (
                <ResumeEntry
                  key={title}
                  sideLabel={year!}
                  title={[title, presentedBy].filter(Boolean).join(' from ')}
                  linkUrl={linkUrl}
                  description={description}
                />
              ))}
            </StResumeSection>
          </>
        )}

        {showWorkExperience && (
          <>
            <Spacing tw="h-12" />
            <StResumeSection>
              <H2 className="mb-1 body-sm-regular leading-6 text-secondary">Work Experience</H2>
              {workExperience.map(
                ({ title, from, to, linkUrl, company, location, description }) => (
                  <ResumeEntry
                    key={title}
                    sideLabel={`${from} - ${to}`}
                    title={[title, company].filter(Boolean).join(' at ')}
                    subTitle={location}
                    linkUrl={linkUrl}
                    description={description}
                  />
                )
              )}
            </StResumeSection>
          </>
        )}

        {showVolunteering && (
          <>
            <Spacing tw="h-12" />
            <StResumeSection>
              <H2 className="mb-1 body-sm-regular leading-6 text-secondary">Volunteering</H2>
              {volunteering.map(({ title, from, to, linkUrl, company, location, description }) => (
                <ResumeEntry
                  key={title}
                  sideLabel={`${from} - ${to}`}
                  title={[title, company].filter(Boolean).join(' at ')}
                  subTitle={location}
                  linkUrl={linkUrl}
                  description={description}
                />
              ))}
            </StResumeSection>
          </>
        )}

        {showEducation && (
          <>
            <Spacing tw="h-12" />
            <StResumeSection>
              <H2 className="mb-1 body-sm-regular leading-6 text-secondary">Education</H2>
              {education.map(({ title, from, to, linkUrl, institute, location, description }) => (
                <ResumeEntry
                  key={title}
                  sideLabel={`${from} - ${to}`}
                  title={[title, institute].filter(Boolean).join(' at ')}
                  subTitle={location}
                  linkUrl={linkUrl}
                  description={description}
                />
              ))}
            </StResumeSection>
          </>
        )}

        {showCtaSection && (
          <>
            <Spacing tw="h-12" />
            <StResumeSection>
              <H2 className="mb-1 body-sm-regular leading-6 text-secondary">{ctaSection.title}</H2>
              {ctaSection.ctaLinks.map(({ socialLinkType, linkTitle, linkUrl }) => (
                <ResumeEntry
                  key={linkTitle}
                  sideLabel={uppercaseFirstChar(socialLinkType!)}
                  title={linkTitle!}
                  linkUrl={linkUrl}
                />
              ))}
            </StResumeSection>
          </>
        )}
      </StResumeContainer>
    </StScreenContainer>
  )
}

/* --- Styles ---------------------------------------------------------------------------------- */

const StScreenContainer = twStyled.View`w-full min-h-full items-center px-4 bg-primary`

const StResumeContainer = twStyled.Article`w-full md:max-w-[550px] py-16 flex-col`

const StResumeSection = twStyled.Section`flex flex-col`

const Spacing = twStyled.View``

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = ResumeScreenProps.introspect()

export const getDocumentationParams = {
  backgrounds: {
    default: 'bg-gray-900',
    values: [{ name: 'bg-gray-900', value: '#1a202c' }],
  },
}

/* --- Exports --------------------------------------------------------------------------------- */

export default ResumeScreen
