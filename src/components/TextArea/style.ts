import styled from '@emotion/styled'

type TextAreaProps = {
  borderColor?: string
  backgroundColor?: string
  color?: string
}

export const Container = styled.textarea<TextAreaProps>`
  color: ${p => p.color};
  background-color: ${p => p.backgroundColor};
  border: none;
  transition: border 0.2s cubic-bezier(0.13, 0.47, 0.36, 1.02);
  font-size: 14px;
  padding: 0.3rem;
  :focus {
    outline: none;
    border-bottom: 2px solid ${p => p.borderColor};
  }
`
