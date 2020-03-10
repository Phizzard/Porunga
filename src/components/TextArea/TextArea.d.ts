import React from 'react'
import { Palette } from '../../types'
/**
 * TextArea properties
 */
export interface TextAreaProps {
  /** A borderColor identifier */
  borderColor?: Palette
  /** Specifies the visible number of lines in a text area */
  rows?: number
  /** Specifies the visible width of a text area */
  cols?: number
  /** Specifies the maximum number of characters allowed in the text area */
  maxlength?: number
  /** Specifies that a text area should be disabled */
  disabled?: boolean
  /** Specifies a short hint that describes the expected value of a text area */
  placeholder?: string
  /** Content inside the TextArea element */
  children?: React.ReactNode
}
/**
 * TextArea
 */
export declare const TextArea: ({
  borderColor,
  rows,
  cols,
  maxlength,
  disabled,
  placeholder,
  children,
}: TextAreaProps) => JSX.Element
export default TextArea
