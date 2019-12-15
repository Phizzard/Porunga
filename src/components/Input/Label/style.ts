import styled from '@emotion/styled'

type LabelProps = {
  hideLabel?: boolean
}

export const StyledLabel = styled.label<LabelProps>`
  color: #999999;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 0.125rem;
  box-sizing: border-box;
  :empty {
    margin: 0;
  }
  ${p => p.hideLabel && 'display: hidden'}
`
