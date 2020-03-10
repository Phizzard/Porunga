import React from 'react'
import { Palette, Sizes, Weight, Style } from '../../types'
declare type TextProps = {
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
declare const Text: ({
  children,
  className,
  color,
  size,
  family,
  weight,
  style,
}: TextProps) => JSX.Element
export default Text
