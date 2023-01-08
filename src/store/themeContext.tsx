import React, { createContext, useContext, useState } from 'react';

// Declaring types and interfaces
export interface themeColors {
  bgColor: string,
  fgColor: string
}

export interface theme {
  isLightTheme?: boolean,
  light?: themeColors,
  dark?: themeColors,
}

interface themeSwitch {
  isLightTheme: boolean;
}

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

  const insertData = (data: theme) => {
    setTheme({...theme, ...data})
  }

  return (
    <ThemeContext.Provider value={{ ...theme, insertData }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)

export default ThemeContextProvider;