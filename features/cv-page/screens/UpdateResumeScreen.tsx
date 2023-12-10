import React from 'react'
import { useAetherRoute } from 'aetherspace/navigation'
import { z, AetherProps, createDataBridge } from 'aetherspace/schemas'
import { GetResumeDataByUserSlugDataBridge } from '../schemas/GetResumeDataByUserSlugDataBridge.ts'
import { View } from 'aetherspace/primitives'
import { H1, P } from 'aetherspace/html-elements'
import useResumeDataForm from '../forms/useResumeDataForm.ts'
import { dummyResumeData } from '../mocks/resumeData.mock.ts'
import { isEmpty } from 'aetherspace/utils/commonUtils/commonUtils.ts'

/* --- Schemas & Types ------------------------------------------------------------------------- */

const UpdateResumeScreenParams = GetResumeDataByUserSlugDataBridge.argsSchema
const UpdateResumeScreenResponse = GetResumeDataByUserSlugDataBridge.responseSchema

const UpdateResumeScreenProps = UpdateResumeScreenResponse.extendSchema('UpdateResumeScreenProps', {
  params: UpdateResumeScreenParams.optional(),
  segment: z.string().optional(),
}).example({
  params: { slug: 'codinsonn' },
  ...dummyResumeData,
})

export type TUpdateResumeScreenProps = AetherProps<typeof UpdateResumeScreenProps>

/* --- Data Fetching Bridge -------------------------------------------------------------------- */

export const screenConfig = createDataBridge({
  ...GetResumeDataByUserSlugDataBridge,
  paramsSchema: UpdateResumeScreenParams,
  propsSchema: UpdateResumeScreenProps,
  dynamic: 'auto', // -i- https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
})

/* --- <UpdateResumeScreen/> ------------------------------------------------------------------- */

export const UpdateResumeScreen = (props: TUpdateResumeScreenProps) => {
  // Data
  const [screenData, { error }] = useAetherRoute(props, screenConfig)

  // Forms
  const formState = useResumeDataForm(screenData)

  // -- Effects --

  // React.useEffect(() => {
  //   formState.handleChange('slug', 'codinsonnn')
  // }, [])

  // React.useEffect(() => {
  //   formState.validate()
  // }, [formState.getValue('slug')])

  // React.useEffect(() => {
  //   const { errors } = formState
  //   console.log('ResumeScreen', { formState })
  // }, [formState.hasErrors('awards')])

  // -- Guards --

  if (error) {
    return (
      <View tw="w-full h-full items-center justify-center">
        <H1 tw="text-red-500">Error: {error.message}</H1>
      </View>
    )
  }

  if (!isEmpty(formState.errors)) {
    return (
      <View tw="w-full h-full items-center justify-center">
        <H1 tw="text-red-500">Form error: {JSON.stringify(formState.errors, null, 4)}</H1>
      </View>
    )
  }

  // -- Render --

  return (
    <View tw="w-full h-full items-center justify-center">
      <H1 tw="text-xl text-black">UpdateResumeScreen</H1>
      <P>{JSON.stringify(formState.values, null, 4)}</P>
    </View>
  )
}

/* --- Documentation --------------------------------------------------------------------------- */

// export const getDocumentationProps = UpdateResumeScreenProps.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default UpdateResumeScreen
