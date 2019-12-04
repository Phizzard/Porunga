import styled from '@emotion/styled'

interface ButtonProps {
  backgroundColor?: string
}

export const Container = styled.button<ButtonProps>`
  color: ${p => p.backgroundColor};
  padding: 0.6rem 1.1rem;
  font-size: 1.1rem;
  font-weight: 500;
  border: 3px solid ${p => p.backgroundColor};
  border-radius: 24px;
  cursor: pointer;
  background-color: #f7fafc;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: 0.2s;
  :hover {
    background-color: ${p => p.backgroundColor};
    color: #fff;
  }
`
