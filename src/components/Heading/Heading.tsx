import React from 'react'
import { useTheme } from 'emotion-theming'

import { Palette, Sizes, ThemeConfig } from '../../types'
import { get } from '../../utils/get'
import { Container } from './style'

export interface HeadingProps {
  /** aria-label will be added to the element and used by screen readers */
  ariaLabel?: string
  /** The color of text using an identifier */
  color?: Palette
  /** Content inside the Heading element */
  children: React.ReactNode
  /** Class attribute for Heading element */
  className?: string
  /** Heading Level */
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /** Font size of Heading using an identitfier */
  size?: Sizes
  /** Alignment of text inside */
  textAlign?: 'left' | 'center' | 'right' | 'justify'
}

/**
 * Heading
 */
const Heading = ({
  ariaLabel,
  children,
  className,
  color = 'dark-1',
  level = 'h1',
  size = 'unset',
  textAlign = 'left',
}: HeadingProps) => {
  const theme: ThemeConfig = useTheme()

  const headingProps = {
    'aria-label': ariaLabel,
    className,
    colorProp: get(theme, 'root', 'colors', color),
    as: level,
    size: get(theme, 'heading', 'sizes', size),
    textAlign,
  }

  return <Container {...headingProps}>{children}</Container>
}

export default Heading
