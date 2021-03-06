import React from 'react'
import { useTheme } from 'emotion-theming'

import { ThemeConfig, Palette } from '../../types'
import { get } from '../../utils/get'
import { Container } from './style'

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
export const TextArea = ({
  borderColor = 'accent-1',
  rows,
  cols,
  maxlength,
  disabled,
  placeholder,
  children,
}: TextAreaProps) => {
  const theme: ThemeConfig = useTheme()

  const textAreaProps = {
    backgroundColor: get(theme, 'root', 'colors', 'light-1'),
    borderColor: get(theme, 'root', 'colors', borderColor),
    color: get(theme, 'root', 'colors', 'dark-1'),
    rows: rows,
    cols: cols,
    maxlength: maxlength,
    disabled: disabled,
    placeholder: placeholder,
  }

  return <Container {...textAreaProps}>{children}</Container>
}

export default TextArea
