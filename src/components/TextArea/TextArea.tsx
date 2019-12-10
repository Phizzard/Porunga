import React from 'react'
import { useTheme } from 'emotion-theming'

import { ThemeConfig } from '../../types'
import { get } from '../../utils/get'
import { Container } from './style'

/**
 * TextArea properties
 */
export interface TextAreaProps {
  /** Content inside the textarea element */
  backgroundColor?: string
  rows?: number
  cols?: number
  maxlength?: number
  disabled?: boolean
  placeholder?: string
  children?: React.ReactNode
}

/**
 * TextArea
 */
export const TextArea = ({
  backgroundColor,
  rows,
  cols,
  maxlength,
  disabled,
  placeholder,
  children,
}: TextAreaProps) => {
  const theme: ThemeConfig = useTheme()

  const textAreaProps = {
    backgroundColor: backgroundColor || get(theme, 'root', 'colors', 'brand'),
    rows: rows,
    cols: cols,
    maxlength: maxlength,
    disabled: disabled,
    placeholder: placeholder,
  }

  const handleKeyUp = () => {}

  return (
    <Container {...textAreaProps}>
      <textarea {...textAreaProps} onKeyUp={handleKeyUp}></textarea>
      {children}
    </Container>
  )
}

export default TextArea
