import React, { createContext, useContext, useState } from 'react';

// Declaring types and interfaces
// Functional component
export const ThemeContext = createContext({});

const ThemeContextProvider = ({children}:any):JSX.Element => {
  
  const themeData:theme = {
    isLightTheme: true,
    light: {
      bgColor: 'white',
      fgColor: 'black',
    },
    dark: {
      bgColor: 'black',
      fgColor: 'white'
    },
    
  }

  const [theme, setTheme] = useState<object>(themeData);

  const themeSetter = (data: themeSwitch) => {
    setTheme({...theme, ...data})
    
  }


  return (
    <ThemeContext.Provider value={{ ...theme, themeSetter }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)

export default ThemeContextProvider;