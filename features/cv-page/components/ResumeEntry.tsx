import React from 'react'
// Navigation
import { Link } from 'aetherspace/navigation'
// Schemas
import { z, aetherSchema, AetherProps } from 'aetherspace/schemas'
// Primitives
import { Text } from 'aetherspace/primitives'
import { H3, P } from 'aetherspace/html-elements'
// Components
import { AetherIcon } from 'aetherspace/components'
// Styles
import { twStyled } from 'aetherspace/styles'

/* --- Schemas --------------------------------------------------------------------------------- */

export const ResumeEntryProps = aetherSchema('ResumeEntryProps', {
  sideLabel: z.string(),
  title: z.string(),
  subTitle: z.string().optional(),
  linkUrl: z.string().optional(),
  description: z.string().optional(),
})

/* --- <ResumeEntry/> -------------------------------------------------------------------------- */

export const ResumeEntry = (props: AetherProps<typeof ResumeEntryProps>) => {
  // Props
  const { sideLabel, title, subTitle, linkUrl, description } = props

  // Render
  return (
    <StResumeEntry>
      <StResumeEntrySideLabel>
        <Text tw="text-neutral-400 roboto">{sideLabel}</Text>
      </StResumeEntrySideLabel>
      <StResumeEntryData>
        {/* Title */}
        {linkUrl ? (
          <Link href={linkUrl} tw="flex flex-row">
            <Text tw="text-gray-300 text-sm roboto font-normal leading-6 my-0">
              <Text tw="text-gray-300 text-sm roboto font-normal leading-6 my-0">{title}</Text>
              <Text>{` `}</Text>
              <Text>
                <AetherIcon name="link-thin" size={14} fill="#FFFFFF" />
              </Text>
            </Text>
          </Link>
        ) : (
          <Text tw="text-gray-300 text-sm roboto font-normal leading-6 my-0">{title}</Text>
        )}
        {/* Subtitle */}
        {subTitle && (
          <Text tw="text-gray-400 text-sm roboto font-normal leading-6 my-0">{subTitle}</Text>
        )}
        {/* Description */}
        {description && <P tw="text-gray-400 leading-6 roboto mt-1">{description}</P>}
      </StResumeEntryData>
    </StResumeEntry>
  )
}

/* --- Styles ---------------------------------------------------------------------------------- */

const StResumeEntry = twStyled.Section`flex flex-row mt-5`

const StResumeEntrySideLabel = twStyled.Text`min-w-[100px] md:min-w-[110px] pt-[1px]`

const StResumeEntryData = twStyled.View`flex flex-col flex-shrink`

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = ResumeEntryProps.eg({
  sideLabel: '2023',
  title: 'Relevant Title for this entry of my resume',
  linkUrl: '',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc ultrices nunc, vitae aliquam nisl nunc ut nisl. Sed euismod, diam quis aliquam ultricies, nisl nunc ultrices nunc, vitae aliquam nisl nunc ut nisl.`,
}).introspect()

export const getDocumentationParams = {
  backgrounds: {
    default: 'bg-gray-900',
    values: [{ name: 'bg-gray-900', value: '#1a202c' }],
  },
}

/* --- Exports --------------------------------------------------------------------------------- */

export default ResumeEntry
