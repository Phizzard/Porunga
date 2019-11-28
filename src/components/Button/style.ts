import styled from '@emotion/styled'

type ButtonProps = {
  theme?: {
    primaryColor?: string
  };
}

export const Container = styled.button`
  color: ${(props: ButtonProps) => props && props.theme && props.theme.primaryColor};
  padding: .75rem 1.25rem;
  font-size: 1rem;
  border: 2px solid ${(props: ButtonProps) => props && props.theme && props.theme.primaryColor};
  border-radius: 24px;
  cursor: pointer;
  background-color: #f7fafc;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: .2s;
  :hover {
    background-color: ${(props: ButtonProps) => props && props.theme && props.theme.primaryColor};
    color: #fff;
  }
`