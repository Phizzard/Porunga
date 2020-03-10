import React from 'react'
import { Palette, Sizes } from '../../types'
declare type ParagraphProps = {
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
declare const Paragraph: ({
  children,
  className,
  color,
  size,
  textAlign,
}: ParagraphProps) => JSX.Element
export default Paragraph
