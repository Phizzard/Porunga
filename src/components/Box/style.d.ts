/// <reference types="react" />
import { FlexDirection } from '../../types'
import { SerializedStyles } from '@emotion/core'
export declare type StyledBoxProps = {
  alignContent?: string
  alignItems?: string
  alignSelf?: string
  backgroundColor?: string
  borderWidth?: string
  borderColor?: string
  borderStyle?: string
  grow?: number
  heightProp?: string
  justifyContent?: string
  directionProp?: FlexDirection
  margin?: SerializedStyles
  rounded?: SerializedStyles
  shadow?: string
  shrink?: number
  padding?: SerializedStyles
  wrapProp?: 'wrap' | 'wrap-reverse' | 'no-wrap'
  widthProp?: string
}
export declare const Container: import('@emotion/styled-base').StyledComponent<
  import('react').DetailedHTMLProps<
    import('react').HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
  StyledBoxProps,
  object
>
