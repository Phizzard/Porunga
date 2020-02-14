declare type InputTypes =
  | 'text'
  | 'password'
  | 'datetime'
  | 'datetime-local'
  | 'date'
  | 'month'
  | 'time'
  | 'week'
  | 'number'
  | 'email'
  | 'url'
  | 'search'
  | 'tel'
  | 'color'
/**
 * Input properties
 */
interface InputProps {
  /** The id for the input (can't enforce they send this, so generate a random one by default) */
  id?: string
  /** The value of the input */
  value?: string
  /** The name of the input */
  name?: string
  /** The type of the input */
  type?: InputTypes
  /** The text label for the input */
  label?: string
  /** Whether or not to hide the label */
  hideLabel?: boolean
  /** The input placeholder text */
  placeholder?: string
  /** The border color for the input when active */
  borderColorActive?: string
  /** The border color for the input when inactive */
  borderColorInactive?: string
  /** The maximum length of the input field */
  maxLength?: string
  /** The minimum length of the input field */
  minLength?: string
  /** A regex pattern to check */
  pattern?: string
  /**  The input title (the tooltip that comes up when validation fails) */
  title?: string
  /** Helper text to show below the input */
  bottomText?: string
  /** Whether or not the input is required */
  required?: boolean
  /** Whether or not the input is disabled */
  disabled?: boolean
  /** Whether or not the input is read only */
  readOnly?: boolean
  /** The tab index for the input */
  tabIndex?: string
  /** A callback function for the on change event */
  onChange?: () => {}
  /** A callback function for the on click event */
  onClick?: () => {}
  /** A callback function for the on focus event */
  onFocus?: () => {}
  /** A callback function for the on blur event */
  onBlur?: () => {}
  /** A callback function for the on click event */
  onKeyDown?: () => {}
  /** Additional class name */
  className?: string
}
/**
 * Input
 */
export declare const Input: ({
  id,
  value,
  name,
  type,
  label,
  hideLabel,
  placeholder,
  borderColorActive,
  borderColorInactive,
  maxLength,
  minLength,
  pattern,
  title,
  bottomText,
  required,
  disabled,
  readOnly,
  tabIndex,
  onChange,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  className,
}: InputProps) => JSX.Element
export default Input
