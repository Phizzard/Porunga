import React from 'react'
import { useTheme } from 'emotion-theming'

import { get } from '../../utils/get'
import { roundedStyles } from '../../utils/roundedStyles'
import { ThemeConfig, Palette, Rounded } from '../../types'
import { StyledBadge } from './style'

const COLOR_BLACK = '#000000'
const COLOR_WHITE = '#FFFFFF'

interface BadgeProps {
  /** The text to display in the badge */
  text?: string
  /** The background color of the badge */
  variant?: Palette
  /** An optional icon to display */
  icon?: React.ReactNode
  /** How round the corners are of the box */
  rounded?: Rounded
}

/**
 * This function tries to determine what font color to use based on contrast
 *
 * @param bgColor the background color of the badge
 */
function chooseTextColor(bgColor = ''): string {
  if (!bgColor) {
    return COLOR_BLACK
  }
  return parseInt(bgColor.replace('#', ''), 16) > 0xffffff / 2
    ? COLOR_BLACK
    : COLOR_WHITE
}

const Badge = ({ text = '', variant = 'brand', rounded }: BadgeProps) => {
  const theme: ThemeConfig = useTheme()
  const roundedProps = roundedStyles(theme, rounded, 'badge')
  const backgroundColor = get(theme, 'root', 'colors', variant)
  const color = chooseTextColor(backgroundColor)

  return (
    <StyledBadge
      backgroundColor={backgroundColor}
      color={color}
      rounded={roundedProps}
    >
      {text}
    </StyledBadge>
  )
}

export default Badge
