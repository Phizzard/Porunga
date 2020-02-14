import styled from '@emotion/styled'
import { css, SerializedStyles } from '@emotion/core'

interface CheckboxProps {
  primaryColor?: string
  disabled?: boolean
}

interface CustomCheckboxProps {
  primaryColor?: string
  isChecked: boolean
  rounded?: SerializedStyles
}

export const Container = styled.label<CheckboxProps>`
  position: relative;
  color: #000;
  padding: 0.2rem 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;

  :hover,
  :focus-within {
    > div {
      background-color: #fff;
      color: ${p => p.primaryColor};
    }
  }

  ${p =>
    p.disabled &&
    css(`
    color: #ccc;
    cursor: no-drop;

    > div {
      background-color: #ccc;
      color: #fff;
    }

    :hover,
    :focus {
      background-color: #f7fafc;
      color: #ccc;
    }
  `)}
`

export const Input = styled.input<CheckboxProps>`
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;

  :focus + div {
    background-color: #fff;
    color: ${p => p.primaryColor};
  }
`

export const CustomCheckbox = styled.div<CustomCheckboxProps>`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  border: solid 2px ${p => p.primaryColor};
  background-color: #fff;
  color: ${p => p.primaryColor};
  margin: -3px 5px 0 0;
  padding: 0;
  font-size: 1.1rem;
  width: 20px;
  height: 20px;
  ${p => p.rounded};

  &:after {
    content: 'L';
    position: absolute;
    top: 0;
    left: 9px;
    transform: scaleX(-1) rotate(-45deg);
    width: 10px;
    height: 10px;
    visibility: ${p => (p.isChecked ? 'visible' : 'hidden')};
  }
`
