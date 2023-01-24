import React, { createContext, useContext, useState } from "react";

interface PropShape {
  toggle?: boolean,
  toggleSetter?: ()=> void
}
// create context with initial value of false
export const ToggleContext:any = createContext({});

// create a providder : this is a functioinal component that returns JSX. this JSX is holds the provider and setter
const ToggleContextProvider = ({children}:any):JSX.Element => {

  
// save toggle(Toggle context) value in a state
  const [toggle, setToggle] = useState<object|boolean>(false)

  // this function sets the toggle value and accepts a boolean
  const toggleSetter = ():void => {
    setToggle(!toggle)
  }

  return(
    <ToggleContext.Provider value={{ toggle, toggleSetter}}>
        {children}
    </ToggleContext.Provider>
  )
}

export const useToggleContext = () => useContext(ToggleContext)

export default ToggleContextProvider