import React from 'react'
import { Palette, Rounded } from '../../types'
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
declare const Badge: ({ text, variant, rounded }: BadgeProps) => JSX.Element
export default Badge
