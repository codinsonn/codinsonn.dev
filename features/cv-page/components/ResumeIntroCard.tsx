import React from 'react'
import { Link } from 'aetherspace/navigation'
import { AetherProps } from 'aetherspace/schemas'
import { ResumeCardData } from '../schemas'
import { View, Image, Text } from 'aetherspace/primitives'
import { H1, H2, P } from 'aetherspace/html-elements'
import { twStyled } from 'aetherspace/styles'
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
              tw="w-22 h-22 mt-0 overflow-hidden bg-slate-100 dark:bg-slate-900 rounded-full"
            />
          </Link>
        </View>
        <View className="flex-1">
          <View className="flex flex-row items-center">
            <H1 className="text-xl font-primary-regular text-primary my-0">{displayName}</H1>
          </View>
          <View className="flex flex-row">
            <P className="text-secondary font-primary-regular my-0">
              {[`${functionTitle} in ${location}`, pronouns].filter(Boolean).join(', ')}
            </P>
          </View>
          {website && (
            <View className="flex flex-row mt-2">
              <View className="text-neutral-300 w-auto">
                <Link to={website} className="bg-secondary rounded-xl overflow-hidden">
                  <Text className="py-1 px-2 body-xs-regular text-primary bg-secondary">
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
            <H2 className="mb-1 body-sm-regular leading-6 text-grayscale-900">About</H2>
            <P className="p-0 m-0 body-sm-regular leading-6 text-grayscale-700">{about}</P>
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
