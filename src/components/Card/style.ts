import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/core'

import Box from './../Box'

export const Container = styled(Box)`
  position: relative;
  font-family: Open Sans, sans-serif;
`

type HeroImageProps = {
  rounded?: SerializedStyles
}
export const HeroImage = styled.img<HeroImageProps>`
  width: 100%;
  height: 100%;
  ${p => p.rounded}
`
