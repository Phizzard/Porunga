import React from 'react'
import { useTheme } from 'emotion-theming'

import { ThemeConfig, Rounded, Palette } from '../../types'
import { roundedStyles } from '../../utils/roundedStyles'
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
  primaryColor?: Palette
  secondaryColor?: Palette
  isOutline?: boolean
  rounded?: Rounded
  label: string
}

/**
 * Button
 */
export const Button = ({
  onClick,
  disabled,
  className,
  primaryColor = 'dark-4',
  secondaryColor = 'light-1',
  isOutline = false,
  label,
  rounded = false,
}: ButtonProps) => {
  const theme: ThemeConfig = useTheme()
  const roundedProps = roundedStyles(theme, rounded, 'button')
  const buttonProps = {
    onClick,
    disabled,
    className,
    rounded: roundedProps,
    isOutline,
    primaryColor: get(theme, 'root', 'colors', primaryColor),
    secondaryColor: get(theme, 'root', 'colors', secondaryColor),
  }

  return (
    <Container {...buttonProps} aria-label={label}>
      {label}
    </Container>
  )
}

export default Button
