import { Rounded, Palette } from '../../types'
/**
 * Button properties
 */
export interface ButtonProps {
  /** Content inside the button element */
  onClick?(): any
  disabled?: boolean
  className?: string
  primaryColor?: Palette
  secondaryColor?: Palette
  isOutline?: boolean
  rounded?: Rounded
  label: string
}
/**
 * Button
 */
export declare const Button: ({
  onClick,
  disabled,
  className,
  primaryColor,
  secondaryColor,
  isOutline,
  label,
  rounded,
}: ButtonProps) => JSX.Element
export default Button
