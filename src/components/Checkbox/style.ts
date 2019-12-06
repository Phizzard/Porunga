import styled from '@emotion/styled'

interface CheckboxProps {
  backgroundColor?: string
}

interface CustomCheckboxProps {
  backgroundColor?: string
  isChecked: boolean
}

export const Container = styled.label<CheckboxProps>`
  position: relative;
  color: ${p => p.backgroundColor};
  padding: 0.6rem 1.1rem;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 24px;
  cursor: pointer;
  background-color: #f7fafc;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: 0.2s;

  :hover,
  :focus {
    background-color: ${p => p.backgroundColor};
    color: #fff;

    > div {
      background-color: #fff;
      color: ${p => p.backgroundColor};
    }
  }
`

export const Input = styled.input<CheckboxProps>`
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;

  :focus + div {
    background-color: #fff;
    color: ${p => p.backgroundColor};
  }
`

export const CustomCheckbox = styled.div<CustomCheckboxProps>`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  background-color: ${p => p.backgroundColor};
  color: #fff;
  margin: -3px 5px 0 0;
  padding: 0;
  font-size: 1.1rem;
  width: 20px;
  height: 20px;
  border-radius: 5px;

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
