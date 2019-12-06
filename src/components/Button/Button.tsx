import React from 'react'
import { useTheme } from 'emotion-theming'

import { ThemeConfig } from '../../types'
import { get } from '../../utils/get'
import { Container } from './style'

/**
 * Button properties
 */
export interface ButtonProps {
  /** Content inside the button element */
  backgroundColor?: string
  children?: React.ReactNode
}

/**
 * Button
 */
export const Button = ({ backgroundColor, children }: ButtonProps) => {
  const theme: ThemeConfig = useTheme()

  const buttonProps = {
    backgroundColor: backgroundColor || get(theme, 'root', 'colors', 'brand'),
  }

  return <Container {...buttonProps}>{children}</Container>
}

export default Button
