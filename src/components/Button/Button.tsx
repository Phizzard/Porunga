import React from 'react'
import { Container } from './style'

/**
 * Button properties
 */
export interface IButtonProps {
  /** Content inside the button element */
  children?: React.ReactNode
}

/**
 * Button
 */
export const Button = ({ children }: IButtonProps) => (
  <Container>{children}</Container>
)

export default Button
