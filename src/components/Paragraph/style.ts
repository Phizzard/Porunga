import styled from '@emotion/styled'

type ContainerProps = {
  colorProp?: string
  size?: string
  textAlign?: string
}

export const Container = styled.p<ContainerProps>`
  font-family: sans-serif;
  color: ${p => p.colorProp};
  font-size: ${p => p.size};
  text-align: ${p => p.textAlign};
`
