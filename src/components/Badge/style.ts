import styled from '@emotion/styled'

type BadgeProps = {
  color?: string
  backgroundColor?: string
}

export const StyledBadge = styled.span<BadgeProps>`
  padding: 0.4rem 1.8rem;
  color: ${p => p.color};
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 24px;
  background-color: ${p => p.backgroundColor};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`
