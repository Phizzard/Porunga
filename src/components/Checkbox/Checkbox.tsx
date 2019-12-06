import React, { useState } from 'react'
import { useTheme } from 'emotion-theming'

import { ThemeConfig } from '../../types'
import { get } from '../../utils/get'
import { Container, Input, CustomCheckbox } from './style'

/**
 * Checkbox properties
 */
export interface CheckboxProps {
  /** Content inside the checkbox element */
  backgroundColor?: string
  children?: React.ReactNode
}

/**
 * Checkbox
 */
export const Checkbox = ({ backgroundColor, children }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false)
  const theme: ThemeConfig = useTheme()

  const checkboxProps = {
    backgroundColor: backgroundColor || get(theme, 'root', 'colors', 'brand'),
  }

  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <Container {...checkboxProps}>
      <Input
        type="checkbox"
        {...checkboxProps}
        checked={isChecked}
        onChange={handleChange}
      />
      <CustomCheckbox {...checkboxProps} isChecked={isChecked} /> {children}
    </Container>
  )
}

export default Checkbox
