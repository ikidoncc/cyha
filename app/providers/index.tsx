import React from 'react'
import { ThemeProvider } from './theme'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider storageKey="cyha-theme">{children}</ThemeProvider>
}
