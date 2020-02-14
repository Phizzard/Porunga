import React, { useState, useEffect, useCallback } from 'react'
import { useTheme } from 'emotion-theming'

import { ThemeConfig, Rounded, Palette } from '../../types'
import { get } from '../../utils/get'
import { Container, Input, CustomCheckbox } from './style'
import { roundedStyles } from '../../utils/roundedStyles'

/**
 * Checkbox properties
 */
export interface CheckboxProps {
  /** Content inside the checkbox element */
  onChange?(isChecked: boolean): any
  id?: string
  name?: string
  checked?: boolean
  disabled?: boolean
  className?: string
  primaryColor?: Palette
  label: string
  rounded?: Rounded
}

/**
 * Checkbox
 */
export const Checkbox = ({
  onChange,
  id,
  name,
  checked,
  disabled,
  className,
  primaryColor = 'dark-1',
  label,
  rounded = false,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked || false)
  const theme: ThemeConfig = useTheme()
  const roundedProps = roundedStyles(theme, rounded, 'checkbox')
  const checkboxProps = {
    primaryColor: get(theme, 'root', 'colors', primaryColor),
    disabled,
    rounded: roundedProps,
  }

  const handleChange = useCallback(() => {
    if (checked === undefined) {
      const newState = !isChecked
      setIsChecked(newState)
      if (onChange) onChange(newState)
    }
  }, [checked, onChange, isChecked])

  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked)
      if (onChange) onChange(checked)
    }
  }, [checked, onChange])

  return (
    <Container id={id} className={className} {...checkboxProps}>
      <Input
        type="checkbox"
        name={name}
        {...checkboxProps}
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        aria-label={label}
      />
      <CustomCheckbox {...checkboxProps} isChecked={isChecked} /> {label}
    </Container>
  )
}

export default Checkbox
