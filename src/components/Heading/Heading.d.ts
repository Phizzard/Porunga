import React from 'react'
import { Palette, Sizes } from '../../types'
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
  textAlign?: 'left' | 'center' | 'right'
}
/**
 * Heading
 */
declare const Heading: ({
  ariaLabel,
  children,
  className,
  color,
  level,
  size,
  textAlign,
}: HeadingProps) => JSX.Element
export default Heading
