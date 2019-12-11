import React from 'react'
import { useTheme } from 'emotion-theming'

import { Container } from './style'
import { Palette, Sizes, Weight, Style, ThemeConfig } from '../../types'
import { get } from '../../utils/get'

type TextProps = {
  /** Content inside Text component */
  children: React.ReactNode
  /** Class attribute for text */
  className?: string
  /** Color of text */
  color?: Palette
  /** Font size of text */
  size?: Sizes
  /** Font family of text */
  family?: string
  /** Font weight of text */
  weight?: Weight
  /** Font style of text */
  style?: Style
}

/**
 * Text
 */
const Text = ({
  children,
  className,
  color = 'dark-1',
  size = 'unset',
  family = 'sans-serif',
  weight = 'unset',
  style = 'unset',
}: TextProps) => {
  const theme: ThemeConfig = useTheme()

  const textProps = {
    className,
    colorProp: get(theme, 'root', 'colors', color),
    size: get(theme, 'text', 'sizes', size),
    family,
    weight: get(theme, 'text', 'weights', weight),
    styleProp: get(theme, 'text', 'styles', style),
  }

  return <Container {...textProps}>{children}</Container>
}

export default Text
