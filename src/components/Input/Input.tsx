import React, { useRef } from 'react'
import { useTheme } from 'emotion-theming'

import Label from './Label'
import BottomText from './BottomText'
import { StyledInput, Container } from './style'
import { Rounded, ThemeConfig } from '../../types'
import { roundedStyles } from '../../utils/roundedStyles'

type InputTypes =
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
  /** Optionally round the edges */
  rounded?: Rounded
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
  /** Any extra properties to pass to the container */
  containerProps?: any
  /** Any extra properties to pass to the label */
  labelProps?: any
  /** Any extra properties to pass to the bottom text */
  bottomTextProps?: any
  /** Any extra properties to pass to the input */
  props?: any
}

function generateId() {
  return (
    Math.random()
      .toString(36)
      .substring(2) + Date.now().toString(36)
  )
}

export const Input = ({
  id = generateId(),
  value = '',
  name = '',
  type = 'text',
  label = '',
  hideLabel = false,
  placeholder = '',
  borderColorActive = '#AAAAAA',
  borderColorInactive = '#BFBFBF',
  maxLength = '50',
  minLength = '0',
  pattern = '',
  title = '',
  bottomText = '',
  required = false,
  disabled = false,
  readOnly = false,
  rounded,
  tabIndex = '0',
  onChange,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  containerProps,
  labelProps,
  bottomTextProps,
  ...props
}: InputProps) => {
  const theme: ThemeConfig = useTheme()
  const labelId = generateId()
  const inputRef = useRef()

  const roundedProps = roundedStyles(theme, rounded, 'input')

  return (
    <Container {...containerProps}>
      <Label
        id={labelId}
        label={label}
        hideLabel={hideLabel}
        required={required}
        inputId={id}
        {...labelProps}
      />

      <StyledInput
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        borderColorActive={borderColorActive}
        borderColorInactive={borderColorInactive}
        onChange={onChange}
        tabIndex={Number(tabIndex)}
        onFocus={onFocus}
        onBlur={onBlur}
        onClick={onClick}
        onKeyDown={onKeyDown}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        maxLength={Number(maxLength)}
        minLength={Number(minLength)}
        pattern={pattern}
        title={title}
        aria-labelledby={labelId}
        ref={inputRef.current}
        rounded={roundedProps}
        {...props}
      />

      {!!bottomText && (
        <BottomText {...bottomTextProps}>{bottomText}</BottomText>
      )}
    </Container>
  )
}

export default Input
