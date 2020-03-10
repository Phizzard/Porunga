import React from 'react'
import { Palette } from '../../types'
/**
 * RadioButton properties
 */
export interface RadioButtonProps {
  /** aria-label will be added to the element and used by screen readers */
  ariaDescribedBy?: string
  /** A backgroundColor identifier */
  backgroundColor?: Palette
  /** A checked identifier */
  checked?: boolean
  /** Content inside the RadioButton element */
  children?: React.ReactNode
  /** Class attribute */
  className?: string
  /** The color of text using an identifier */
  color?: Palette
  /** A disabled identifier */
  disabled?: boolean
  /** A label identifier */
  label?: string
  /** A name identifier */
  name: string
  /** A value identifier */
  value: string
}
/**
 * RadioButton
 */
export declare const RadioButton: ({
  ariaDescribedBy,
  backgroundColor,
  checked,
  children,
  className,
  color,
  disabled,
  label,
  name,
  value,
}: RadioButtonProps) => JSX.Element
export default RadioButton
