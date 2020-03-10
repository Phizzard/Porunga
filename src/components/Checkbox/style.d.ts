/// <reference types="react" />
import { SerializedStyles } from '@emotion/core'
interface CheckboxProps {
  primaryColor?: string
  disabled?: boolean
}
interface CustomCheckboxProps {
  primaryColor?: string
  isChecked: boolean
  rounded?: SerializedStyles
}
export declare const Container: import('@emotion/styled-base').StyledComponent<
  import('react').DetailedHTMLProps<
    import('react').LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >,
  CheckboxProps,
  object
>
export declare const Input: import('@emotion/styled-base').StyledComponent<
  import('react').DetailedHTMLProps<
    import('react').InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  CheckboxProps,
  object
>
export declare const CustomCheckbox: import('@emotion/styled-base').StyledComponent<
  import('react').DetailedHTMLProps<
    import('react').HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
  CustomCheckboxProps,
  object
>
export {}
