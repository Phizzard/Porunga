import React from "react";
import { Container } from "./style";

/**
 * Button properties
 */
export interface IButtonProps {
  /** children description */
  children?: React.ReactNode;
  /** className description */
  className: string;
};

/**
 * Button
 */
export const Button = ({ children, className }: IButtonProps) => (
  <Container className={className}>{children}</Container>
)

export default Button;