/// <reference types="react" />
/// <reference types="@emotion/core" />
declare type ProgressBarProps = {
  color?: string
  text?: string
  textColor?: string
  rounded?: boolean
}
export declare const Container: import('@emotion/styled-base').StyledComponent<
  import('react').DetailedHTMLProps<
    import('react').HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
  ProgressBarProps,
  object
>
export declare const StyledProgressBar: import('@emotion/styled-base').StyledComponent<
  import('react').DetailedHTMLProps<
    import('react').HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >,
  ProgressBarProps,
  object
>
export {}
