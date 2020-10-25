import React from 'react'
import { useTheme } from 'emotion-theming'

import { ThemeConfig, Sizes, Palette } from '../../types'
import { get } from '../../utils/get'
import { AvatarImage, AvatarText } from './style'

export interface AvatarProps {
  imgSrc?: string
  size?: Sizes
  bgColor?: Palette
  textColor?: Palette
  text?: string
  alt?: string
  round?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
  containerProps?: any
  props?: any
}

export const Avatar = ({
  imgSrc,
  size = 'medium',
  bgColor = 'brand',
  textColor = 'light-1',
  text,
  round = true,
  alt = '',
  onClick,
  ...props
}: AvatarProps) => {
  const theme: ThemeConfig = useTheme()

  const avatarProps = {
    size: get(theme, 'avatar', 'sizes', size),
    round,
    ...props,
  }

  const avatarTextProps = {
    bgColor: get(theme, 'root', 'colors', bgColor),
    color: get(theme, 'root', 'colors', textColor),
    ...avatarProps,
  }

  return (
    <div onClick={onClick}>
      {imgSrc ? (
        <AvatarImage src={imgSrc} alt={alt} {...avatarProps} />
      ) : (
        <AvatarText {...avatarTextProps}>{text}</AvatarText>
      )}
    </div>
  )
}

export default Avatar
