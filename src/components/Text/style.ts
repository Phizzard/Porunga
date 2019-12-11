import styled from '@emotion/styled'

type ContainerProps = {
  colorProp?: string
  size?: string
  family?: string
  weight?: string
  styleProp?: string
}

export const Container = styled.p<ContainerProps>`
  color: ${p => p.colorProp};
  font-size: ${p => p.size};
  font-family: ${p => p.family};
  font-weight: ${p => p.weight};
  font-style: ${p => p.styleProp};
`
