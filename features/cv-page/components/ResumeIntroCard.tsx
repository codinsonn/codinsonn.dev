import React from 'react'
// Navigation
import { Link } from 'aetherspace/navigation'
// Schemas
import { AetherProps } from 'aetherspace/schemas'
import { ResumeCardData } from '../schemas'
// Primitives
import { View, Image, Text } from 'aetherspace/primitives'
// SEO
import { H1, H2, P } from 'aetherspace/html-elements'
// Styles
import { twStyled } from 'aetherspace/styles'
// Mocks
import { dummyResumeData } from '../mocks/resumeData.mock'

/* --- <ResumeIntroCard/> ------------------------------------------------------------------------- */

export const ResumeIntroCard = (props: AetherProps<typeof ResumeCardData>) => {
  // Props & Data
  const { displayName, profileImgUrl, functionTitle, location, pronouns, website, about } = props

  // -- Loading --

  if (!displayName || !profileImgUrl) return null

  // -- Render --

  return (
    <>
      <StPersonalHeader>
        <View className="flex self-end p-0 my-0 mr-4">
          <Link to="/">
            <Image
              src={profileImgUrl}
              alt="Picture of the applicant"
              tw="w-22 h-22 mt-0 overflow-hidden bg-slate-100 rounded-full"
            />
          </Link>
        </View>
        <View className="flex-1">
          <View className="flex flex-row items-center  text-white">
            <H1 className="text-xl text-neutral-100">{displayName}</H1>
          </View>
          <View className="flex flex-row">
            <P className="text-neutral-200 m-0 roboto">
              {[`${functionTitle} in ${location}`, pronouns].filter(Boolean).join(', ')}
            </P>
          </View>
          {website && (
            <View className="flex flex-row mt-2 text-white">
              <View className="text-neutral-300 w-auto">
                <Link to={website} className="bg-slate-800 rounded-xl overflow-hidden">
                  <Text className="py-1 px-2 text-xs roboto text-white bg-slate-800">
                    {website?.replace(/(^\w+:|^)\/\//, '')}
                  </Text>
                </Link>
              </View>
            </View>
          )}
        </View>
      </StPersonalHeader>

      {about && (
        <>
          <Spacing tw="h-8" />
          <StAboutSection>
            <H2 className="mb-1 text-sm roboto-bold leading-6 text-neutral-100">About</H2>
            <P className="p-0 m-0 leading-6 text-neutral-300">{about}</P>
          </StAboutSection>
        </>
      )}
    </>
  )
}

/* --- Styles ---------------------------------------------------------------------------------- */

const StPersonalHeader = twStyled.Section`flex flex-row items-center`

const Spacing = twStyled.View``

const StAboutSection = twStyled.Section`flex flex-col`

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = ResumeCardData.eg(dummyResumeData.generalData).introspect()

export const getDocumentationParams = {
  backgrounds: {
    default: 'bg-gray-900',
    values: [{ name: 'bg-gray-900', value: '#1a202c' }],
  },
}

/* --- Exports --------------------------------------------------------------------------------- */

export default ResumeIntroCard
