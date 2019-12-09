import styled from '@emotion/styled'

import { FlexDirection } from '../../types'

export type StyledBoxProps = {
  alignContent?: string
  alignItems?: string
  alignSelf?: string
  backgroundColor?: string
  borderWidth?: string
  borderColor?: string
  borderStyle?: string
  heightProp?: string
  justifyContent?: string
  directionProp?: FlexDirection
  margin?: string
  padding?: string
  wrapProp?: 'wrap' | 'wrap-reverse' | 'no-wrap'
  widthProp?: string
}

export const Container = styled.div<StyledBoxProps>`
  display: flex;
  flex-direction: ${p => p.directionProp};
  padding: ${p => p.padding};
  margin: ${p => p.margin};
  flex-wrap: ${p => p.wrapProp};
  width: ${p => p.widthProp};
  height: ${p => p.heightProp};
  justify-content: ${p => p.justifyContent};
  align-content: ${p => p.alignContent};
  align-items: ${p => p.alignItems};
  align-self: ${p => p.alignSelf};
  background-color: ${p => p.backgroundColor};
  border-width: ${p => p.borderWidth};
  border-style: ${p => p.borderStyle};
  border-color: ${p => p.borderColor};
`
