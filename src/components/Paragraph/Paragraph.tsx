import React from 'react'
import { useTheme } from 'emotion-theming'

import { Container } from './style'
import { Palette, Sizes, ThemeConfig } from '../../types'
import { get } from '../../utils/get'

type ParagraphProps = {
  /** Content inside Paragraph component */
  children: React.ReactNode
  /** Class attribute for paragraph */
  className?: string
  /** Color of text */
  color?: Palette
  /** Font size of text */
  size?: Sizes
  /** Alignment of text inside paragraph */
  textAlign?: 'left' | 'center' | 'right'
}

/**
 * Paragraph
 */
export const Paragraph = ({
  children,
  className,
  color = 'dark-1',
  size = 'unset',
  textAlign = 'left',
}: ParagraphProps) => {
  const theme: ThemeConfig = useTheme()

  const paragraphProps = {
    className,
    colorProp: get(theme, 'root', 'colors', color),
    size: get(theme, 'paragraph', 'sizes', size),
    textAlign,
  }

  return <Container {...paragraphProps}>{children}</Container>
}

export default Paragraph
