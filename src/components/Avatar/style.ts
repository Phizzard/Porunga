import styled from '@emotion/styled'

interface AvatarProps {
  size?: string
  round?: boolean
}

interface AvatarTextProps {
  bgColor?: string
  color?: string
  size?: string
  round?: boolean
}

export const AvatarImage = styled.img<AvatarProps>`
  height: ${p => p.size};
  width: ${p => p.size};
  object-fit: contain;
  border-radius: ${p => (p.round ? '50%' : 'none')};
`

export const AvatarText = styled.span<AvatarTextProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Open Sans, sans-serif;
  background-color: ${p => p.bgColor};
  color: ${p => p.color};
  height: ${p => p.size};
  width: ${p => p.size};
  border-radius: ${p => (p.round ? '50%' : 'none')};
  font-size: 1.5rem;
`
