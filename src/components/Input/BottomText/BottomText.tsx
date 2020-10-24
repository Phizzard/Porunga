import React from 'react'
import { StyledBottomText } from './style'

interface BottomTextProps {
  /** Content inside the BottomText element */
  children?: React.ReactNode
  /** Any extra properties to pass to the bottom text */
  props?: any
}

const Label = ({ children, ...props }: BottomTextProps) => {
  return <StyledBottomText {...props}>{children}</StyledBottomText>
}

export default Label
