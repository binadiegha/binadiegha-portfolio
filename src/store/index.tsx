import React from 'react'
import ThemeContextProvider from './themeContext'

const Store = ({children}:any) => {
  return (
    <ThemeContextProvider>
      {children}
    </ThemeContextProvider>
  )
}

export default Store;