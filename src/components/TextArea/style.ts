import styled from '@emotion/styled'

type TextAreaProps = {
  backgroundColor?: string
}

export const Container = styled.div<TextAreaProps>`
  textarea {
    color: ${p => p.backgroundColor};
    border: 3px solid ${p => p.backgroundColor};
    padding: 0.3rem;
  }
`
