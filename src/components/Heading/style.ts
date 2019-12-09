import styled from '@emotion/styled'

interface HeadingProps {
  colorProp?: string
  size?: string
  textAlign?: string
}

export const Container = styled.h1<HeadingProps>`
  color: ${p => p.colorProp};
  font-family: sans-serif;
  font-size: ${p => p.size};
  text-align: ${p => p.textAlign};
`
