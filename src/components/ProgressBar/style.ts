import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/core'

type ProgressBarProps = {
  color?: string
  text?: string
  textColor?: string
  rounded?: SerializedStyles
}

export const Container = styled.div<ProgressBarProps>`
  border: none;
  position: relative;
  display: block;
  max-width: 100%;
  background: rgba(0, 0, 0, 0.1);
  font-family: Open Sans, sans-serif;
  ${p => p.rounded}
`

export const StyledProgressBar = styled.span<ProgressBarProps>`
  display: block;
  background-color: ${p => p.color};
  height: 100%;
  border-radius: inherit;
  transition: width .2s ease-in;
  line-height: 1;
  height: 2rem;
  transition: width .1s ease, background-color .1s ease;
  ${p => p.rounded}

  :after {
    content: '${p => p.text}';
    color: ${p => p.textColor};
    font-weight: bold;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-right: 0.4rem;
  }
`
