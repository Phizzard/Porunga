import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

type ContainerProps = {
  color?: string
  size?: string
}

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const SolidSpinner = styled.div<ContainerProps>`
  border: 0.5em solid ${p => p.color};
  border-top: 0.5em solid #fff;
  border-radius: 50%;
  height: ${p => p.size};
  width: ${p => p.size};
  animation: ${spin} 0.6s linear infinite;
`
