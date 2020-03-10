/// <reference types="react" />
import { SerializedStyles } from '@emotion/core'
interface ButtonProps {
  primaryColor?: string
  secondaryColor?: string
  rounded?: SerializedStyles
  isOutline?: boolean
}
export declare const Container: import('@emotion/styled-base').StyledComponent<
  import('react').DetailedHTMLProps<
    import('react').ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  ButtonProps,
  object
>
export {}
