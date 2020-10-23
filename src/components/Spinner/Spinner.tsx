import React from 'react'
import { useTheme } from 'emotion-theming'

import { ThemeConfig, Sizes, Palette } from '../../types'
import { get } from '../../utils/get'
import { SolidSpinner } from './style'

export interface SpinnerProps {
  /** Type of spinner to use. Defaults to solid */
  type?: 'solid'
  /** The primary color to use from the theme palette */
  primaryColor?: Palette
  /** The size of the spinner. Defaults to small */
  size?: Sizes
}

const SpinnerMap = {
  solid: SolidSpinner,
}

const Spinner = ({
  type = 'solid',
  primaryColor = 'brand',
  size = 'small',
}: SpinnerProps) => {
  const theme: ThemeConfig = useTheme()
  const Spinner = SpinnerMap[type]

  const spinnerProps = {
    color: get(theme, 'root', 'colors', primaryColor),
    size: get(theme, 'spinner', 'sizes', size),
  }

  return <Spinner {...spinnerProps} />
}

export default Spinner
