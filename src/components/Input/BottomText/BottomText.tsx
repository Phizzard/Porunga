import React from 'react'
import { StyledBottomText } from './style'

interface BottomTextProps {
  children?: React.ReactNode
}

const Label = ({ children }: BottomTextProps) => {
  return <StyledBottomText>{children}</StyledBottomText>
}

export default Label
