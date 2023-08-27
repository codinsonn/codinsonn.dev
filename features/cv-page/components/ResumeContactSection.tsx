import React from 'react'
// Navigation
import { Link } from 'aetherspace/navigation'
// Schemas
import { AetherProps, aetherSchema } from 'aetherspace/schemas'
import { SocialLinkData } from 'links-page/schemas'
// Primitives
import { View, Text } from 'aetherspace/primitives'
import { H2 } from 'aetherspace/html-elements'
// Components
import { AetherIcon } from 'aetherspace/components'
// Styles
import { twStyled, useTailwindStyles } from 'aetherspace/styles'
// Utils
import { isEmpty, uppercaseFirstChar } from 'aetherspace/utils'
// Mocks
import { dummyResumeData } from '../mocks/resumeData.mock'

/* --- Schemas --------------------------------------------------------------------------------- */

export const ResumeContactSectionProps = aetherSchema('ResumeContactSectionProps', {
  contactLinks: SocialLinkData.array(),
}).eg({
  contactLinks: dummyResumeData.contactLinks,
})

/* --- <ResumeContactSection/> ----------------------------------------------------------------- */

export const ResumeContactSection = (props: AetherProps<typeof ResumeContactSectionProps>) => {
  // Props
  const { contactLinks } = props

  // Styles
  const textSecondaryStyle = useTailwindStyles('text-secondary')
  const iconFill = (textSecondaryStyle?.color as string) || '#FFFFFF'

  // -- Loading --

  if (isEmpty(contactLinks)) return null

  // -- Render --

  return (
    <StContactLinksContainer>
      <H2 className="mb-1 body-sm-regular leading-6 text-grayscale-900">Contact</H2>
      {contactLinks?.map(({ id, socialLinkType, linkUrl, platformUsername, linkTitle }) => (
        <View key={id} tw="flex flex-row mt-5">
          <View tw="min-w-[100px] md:min-w-[110px] pt-[1px]">
            <Text tw="text-grayscale-600 body-sm-regular">
              {uppercaseFirstChar(socialLinkType!)}
            </Text>
          </View>
          {linkUrl ? (
            <Link href={linkUrl} tw="flex flex-row">
              <Text tw="text-secondary body-sm-regular">
                <Text tw="text-secondary body-sm-regular">{platformUsername || linkTitle}</Text>
                {` `}
                <Text>
                  <AetherIcon name="link-thin" size={14} fill={iconFill} />
                </Text>
              </Text>
            </Link>
          ) : (
            <Text tw="text-secondary body-sm-regular">{platformUsername || linkTitle}</Text>
          )}
        </View>
      ))}
    </StContactLinksContainer>
  )
}

/* --- Styles ---------------------------------------------------------------------------------- */

const StContactLinksContainer = twStyled.Section`flex flex-col max-w-full`

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = ResumeContactSectionProps.introspect()

export const getDocumentationParams = {
  backgrounds: {
    default: 'bg-gray-900',
    values: [{ name: 'bg-gray-900', value: '#1a202c' }],
  },
}

/* --- Exports --------------------------------------------------------------------------------- */

export default ResumeContactSection
