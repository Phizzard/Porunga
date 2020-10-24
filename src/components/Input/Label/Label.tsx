import React from 'react'
import { StyledLabel } from './style'

interface LabelProps {
  /** The text for the label */
  label?: string
  /** Whether it should display as required */
  required?: boolean
  /** The input id to match it to */
  inputId?: string
  /** The label identifier */
  id?: string
  /** Whether the label should be hidden */
  hideLabel?: boolean
  /** Any extra properties to pass to the label */
  props?: any
}

const Label = ({
  id,
  label,
  required,
  inputId,
  hideLabel,
  ...props
}: LabelProps) => {
  return (
    <StyledLabel htmlFor={inputId} id={id} hideLabel={hideLabel} {...props}>
      {label}
      {required && '*'}
    </StyledLabel>
  )
}

export default Label
