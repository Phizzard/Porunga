import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/core'

interface ButtonProps {
  primaryColor?: string
  rounded?: SerializedStyles
  isOutline?: boolean
}

export const Container = styled.button<ButtonProps>`
  color: ${p => (p.isOutline ? p.primaryColor : '#f7fafc')};
  padding: 0.6rem 1.1rem;
  font-size: 1.1rem;
  font-weight: 500;
  border: 3px solid ${p => p.primaryColor};
  cursor: pointer;
  background-color: ${p => (p.isOutline ? '#f7fafc' : p.primaryColor)};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: 0.2s;
  ${p => p.rounded};
  :hover,
  :focus {
    background-color: ${p => (p.isOutline ? p.primaryColor : '#f7fafc')};
    color: ${p => (p.isOutline ? '#f7fafc' : p.primaryColor)};
  }

  :disabled {
    border-color: #ccc;
    color: #ccc;
    cursor: no-drop;

    :hover,
    :focus {
      background-color: #f7fafc;
      color: #ccc;
    }
  }
`
