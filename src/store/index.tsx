import React from 'react'
import ThemeContextProvider from './themeContext'
import ToggleContextProvider from './toggleContext'

const Store = ({children}:any) => {
  return (
    <ToggleContextProvider>
      <ThemeContextProvider>
        {children}
      </ThemeContextProvider>
    </ToggleContextProvider>
  )
}

export default Store;