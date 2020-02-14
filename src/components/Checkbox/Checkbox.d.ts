import { Rounded, Palette } from '../../types'
/**
 * Checkbox properties
 */
export interface CheckboxProps {
  /** Content inside the checkbox element */
  onChange?(isChecked: boolean): any
  id?: string
  name?: string
  checked?: boolean
  disabled?: boolean
  className?: string
  primaryColor?: Palette
  label: string
  rounded?: Rounded
}
/**
 * Checkbox
 */
export declare const Checkbox: ({
  onChange,
  id,
  name,
  checked,
  disabled,
  className,
  primaryColor,
  label,
  rounded,
}: CheckboxProps) => JSX.Element
export default Checkbox
