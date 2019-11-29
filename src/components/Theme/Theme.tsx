import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { defaultTheme } from '../../theme'

interface IThemeProps {
  /** Content inside the Theme Wrapper */
  children: React.ReactNode
}

export const Theme = ({ children }: IThemeProps) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
)
export default Theme
