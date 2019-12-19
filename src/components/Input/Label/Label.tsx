import React from 'react'
import { StyledLabel } from './style'

interface LabelProps {
  label?: string
  required?: boolean
  inputId?: string
  id?: string
  hideLabel?: boolean
}

const Label = ({ id, label, required, inputId, hideLabel }: LabelProps) => {
  return (
    <StyledLabel htmlFor={inputId} id={id} hideLabel={hideLabel}>
      {label}
      {required && '*'}
    </StyledLabel>
  )
}

export default Label
