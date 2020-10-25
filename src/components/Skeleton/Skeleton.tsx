import React from 'react'
import { useTheme } from 'emotion-theming'

import { ThemeConfig } from 'types'
import { get } from 'utils/get'
import { Container } from './style'

export type SkeletonProps = {
  /** If true, Skeleton background will animate */
  animate?: boolean
  /** Content inside the Skeleton element */
  children?: React.ReactNode
  /** Any additional props for Skeleton */
  props?: any
}

export const Skeleton = ({
  animate = false,
  children,
  ...props
}: SkeletonProps) => {
  const theme: ThemeConfig = useTheme()

  const SkeletonProps = {
    animate,
    pulseBottomColour: get(theme, 'root', 'colors', 'light-2') || '',
    pulsePeakColour: get(theme, 'root', 'colors', 'light-4') || '',
    ...props,
  }

  return (
    <Container
      backgroundColor="light-2"
      width="full"
      height="xxsmall"
      {...SkeletonProps}
    >
      {children}
    </Container>
  )
}

export default Skeleton
