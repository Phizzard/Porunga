import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/core'

interface SelectProps {
  primaryColor?: string
  secondaryColor?: string
  focusOutline?: string
  shadow?: string
  rounded: SerializedStyles
}

export const Container = styled.select<SelectProps>`
  padding: 0.2rem 0.4rem;
  font-size: 1rem;
  border-width: 0.1rem;
  border-color: ${p => p.primaryColor};
  color: ${p => p.primaryColor};
  background-color: ${p => p.secondaryColor};
  box-shadow: ${p => p.shadow};
  ${p => p.rounded};
  &:focus {
    outline: ${p => p.focusOutline} auto 1px;
    background-color: ${p => p.primaryColor}30;
  }
`

export const Option = styled.option``
