import React, { useState } from 'react'
import { useTheme } from 'emotion-theming'
import cx from 'classnames'

import { ThemeConfig } from '../../types'
import { get } from '../../utils/get'
import { Container, Input, CustomCheckbox } from './style'

/**
 * Checkbox properties
 */
export interface CheckboxProps {
  /** Content inside the checkbox element */
  onChange?(isChecked: boolean, event: object): any
  id?: string
  name?: string
  disabled?: boolean
  className?: string
  backgroundColor?: string
  children?: React.ReactNode
}

/**
 * Checkbox
 */
export const Checkbox = ({
  onChange,
  id,
  name,
  disabled,
  className,
  backgroundColor,
  children,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false)
  const theme: ThemeConfig = useTheme()

  const checkboxProps = {
    backgroundColor: backgroundColor || get(theme, 'root', 'colors', 'brand'),
  }

  const handleChange = (event: object) => {
    const newState = !isChecked
    setIsChecked(newState)
    if (onChange) onChange(newState, event)
  }

  return (
    <Container
      id={id}
      className={cx(className, { disabled })}
      {...checkboxProps}
    >
      <Input
        type="checkbox"
        name={name}
        {...checkboxProps}
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
      />
      <CustomCheckbox {...checkboxProps} isChecked={isChecked} /> {children}
    </Container>
  )
}

export default Checkbox
