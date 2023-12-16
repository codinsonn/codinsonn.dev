import React from 'react'
import { Link } from 'aetherspace/navigation'
import { z, aetherSchema, AetherProps } from 'aetherspace/schemas'
import { Text } from 'aetherspace/primitives'
import { P } from 'aetherspace/html-elements'
import { AetherIcon } from 'aetherspace/components'
import { twStyled, useTailwindStyles } from 'aetherspace/styles'

/* --- Schemas --------------------------------------------------------------------------------- */

export const ResumeEntryProps = aetherSchema('ResumeEntryProps', {
  sideLabel: z.string(),
  title: z.string(),
  subTitle: z.string().nullish(),
  linkUrl: z.string().nullish(),
  description: z.string().nullish(),
})

/* --- <ResumeEntry/> -------------------------------------------------------------------------- */

export const ResumeEntry = (props: AetherProps<typeof ResumeEntryProps>) => {
  // Props
  const { sideLabel, title, subTitle, linkUrl, description } = props

  // Styles
  const textSecondaryStyle = useTailwindStyles('text-secondary')
  const iconFill = (textSecondaryStyle?.color as string) || '#FFFFFF'

  // Render
  return (
    <StResumeEntry>
      <StResumeEntrySideLabel>
        <Text tw="text-grayscale-600 font-primary-regular">{sideLabel}</Text>
      </StResumeEntrySideLabel>
      <StResumeEntryData>
        {/* Title */}
        {linkUrl ? (
          <Link href={linkUrl} tw="flex flex-row">
            <Text tw="text-secondary body-sm-regular leading-6 my-0">
              <Text tw="text-secondary body-sm-regular leading-6 my-0">{title}</Text>
              {` `}
              <Text>
                <AetherIcon name="link-thin" size={14} fill={iconFill} />
              </Text>
            </Text>
          </Link>
        ) : (
          <Text tw="text-secondary body-sm-regular leading-6 my-0">{title}</Text>
        )}
        {/* Subtitle */}
        {!!subTitle && <Text tw="text-tertiary body-sm-regular leading-6 my-0">{subTitle}</Text>}
        {/* Description */}
        {!!description && <P tw="text-tertiary leading-6 body-sm-regular mt-1">{description}</P>}
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
