import styled from '@emotion/styled'

type TextAreaProps = {
  borderColor?: string
}

export const Container = styled.div<TextAreaProps>`
  textarea {
    color: ${p => p.borderColor};
    border: 3px solid ${p => p.borderColor};
    padding: 0.3rem;
  }
`
