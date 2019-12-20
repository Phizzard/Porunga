import React from 'react'
import { useTheme } from 'emotion-theming'

import { Palette, ThemeConfig } from '../../types'
import { get } from '../../utils/get'
import { Container, Input } from './style'

/**
 * RadioButton properties
 */
export interface RadioButtonProps {
  /** aria-label will be added to the element and used by screen readers */
  ariaDescribedBy?: string
  /** A backgroundColor identifier */
  backgroundColor?: Palette
  /** A checked identifier */
  checked?: boolean
  /** Content inside the RadioButton element */
  children?: React.ReactNode
  /** Class attribute */
  className?: string
  /** The color of text using an identifier */
  color?: Palette
  /** A disabled identifier */
  disabled?: boolean
  /** A label identifier */
  label?: string
  /** A name identifier */
  name: string
  /** A value identifier */
  value: string
}

/**
 * RadioButton
 */
export const RadioButton = ({
  ariaDescribedBy,
  backgroundColor = 'brand',
  checked,
  children,
  className,
  color = 'dark-1',
  disabled,
  label,
  name,
  value,
}: RadioButtonProps) => {
  const theme: ThemeConfig = useTheme()

  const radioButtonProps = {
    'aria-describedby': ariaDescribedBy,
    className,
    backgroundColor: get(theme, 'root', 'colors', backgroundColor),
    colorProp: get(theme, 'root', 'colors', color),
  }

  return (
    <Container>
      <Input
        checked={checked}
        disabled={disabled}
        name={name}
        type="radio"
        value={value}
        {...radioButtonProps}
      />
      <span className="checkmark"></span>
      {label}
      {children}
    </Container>
  )
}

export default RadioButton
