import React from 'react'
import { useTheme } from 'emotion-theming'

import { ThemeConfig, Rounded, Sizes, Palette } from '../../types'
import { roundedStyles } from '../../utils/roundedStyles'
import { get } from '../../utils/get'
import { Container, Option } from './style'

export interface SelectProps {
  /** option elements inside Select {label: string, value: string, selected?: boolean, disabled?: boolean} */
  options: Array<Option>
  /** The default label selected */
  defaultLabel?: string
  /** Whether to round the edges based off of the theme config */
  rounded?: Rounded
  /** The amount of box shadow applied to box */
  shadow?: Sizes
  /** The primary color to use from the theme palette */
  primaryColor?: Palette
  /** The secondary color to use from the theme palette */
  secondaryColor?: Palette
  /** The interface for capturing values of selected option during the select onChange event */
  onChange?: (change: {
    option: { value: string | number; label: string | null }
  }) => any
}

export interface Option {
  label: string
  value: string
  selected?: boolean
  disabled?: boolean
}

const Select = ({
  options,
  rounded,
  onChange,
  shadow = 'unset',
  defaultLabel = 'Please Select',
  primaryColor = 'dark-1',
  secondaryColor = 'light-1',
}: SelectProps) => {
  const theme: ThemeConfig = useTheme()
  const roundedProps = roundedStyles(theme, rounded, 'select')
  const selectedProps = {
    primaryColor: get(theme, 'root', 'colors', primaryColor),
    secondaryColor: get(theme, 'root', 'colors', secondaryColor),
    focusOutline: get(theme, 'root', 'colors', 'accent-1'),
    shadow: get(theme, 'root', 'shadows', shadow),
    rounded: roundedProps,
  }

  return (
    <Container {...selectedProps} onChange={handleOnChange}>
      <Option value="" disabled selected>
        {defaultLabel}
      </Option>
      {options.map(({ value, label }) => (
        <Option key={value} value={value}>
          {label}
        </Option>
      ))}
    </Container>
  )

  function handleOnChange(event: React.ChangeEvent<HTMLSelectElement>) {
    if (event && onChange) {
      const index = event.currentTarget.selectedIndex
      const change = {
        option: {
          value: event.currentTarget.value,
          label: event.currentTarget[index].textContent,
        },
      }

      onChange(change)
    }
  }
}

export default Select
