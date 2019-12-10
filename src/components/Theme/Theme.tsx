import React from 'react'
import { ThemeConfig } from '../../types'
import { ThemeProvider } from 'emotion-theming'
import { defaultTheme } from '../../theme'

interface ThemeProps {
  /** Content inside the Theme Wrapper */
  theme: ThemeConfig
  children: React.ReactNode
}

const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
)
export default Theme
