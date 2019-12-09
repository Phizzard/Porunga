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
  onClick?(): any
  disabled?: boolean
  className?: string
  backgroundColor?: string
  children?: React.ReactNode
}

/**
 * Button
 */
export const Button = ({
  onClick,
  disabled,
  className,
  backgroundColor,
  children,
}: ButtonProps) => {
  const theme: ThemeConfig = useTheme()

  const buttonProps = {
    onClick,
    disabled,
    className,
    backgroundColor: backgroundColor || get(theme, 'root', 'colors', 'brand'),
  }

  return <Container {...buttonProps}>{children}</Container>
}

export default Button
