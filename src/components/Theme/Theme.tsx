import React from 'react'
import { ThemeConfig } from '../../types'
import { ThemeProvider } from 'emotion-theming'
import { defaultTheme } from '../../theme'

interface ThemeProps {
  /** Custom theme config object */
  theme: ThemeConfig
  /** Content inside the Theme Wrapper */
  children: React.ReactNode
}

const Theme = ({ children, theme }: ThemeProps) => (
  <ThemeProvider theme={Object.assign({}, defaultTheme, theme)}>
    {children}
  </ThemeProvider>
)
export default Theme
