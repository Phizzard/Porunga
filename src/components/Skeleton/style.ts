import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'

import { Box } from 'components'

interface ContainerProps {
  animate: boolean
  pulseBottomColour: string
  pulsePeakColour: string
}

const pulse = (bottomColour: string, peakColour: string) => keyframes`
  0% {
    background-color: ${bottomColour};
  }

  50% {
    background-color: ${peakColour};
  }

  100% {
    background-color: ${bottomColour};
  }
`

export const Container = styled(Box)<ContainerProps>`
  ${props =>
    props.animate &&
    css`
      animation: ${pulse(props.pulseBottomColour, props.pulsePeakColour)} 3s
        linear infinite;
    `}
`
