import React from 'react'
import { ThemeConfig } from '../../types'
interface ThemeProps {
  /** Custom theme config object */
  theme: ThemeConfig
  /** Content inside the Theme Wrapper */
  children: React.ReactNode
}
declare const Theme: ({ children, theme }: ThemeProps) => JSX.Element
export default Theme
