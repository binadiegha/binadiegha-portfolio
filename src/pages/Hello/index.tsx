import React from 'react';
import './style.css';
import  {  useThemeContext} from '../../store/themeContext';

const Hello = ():JSX.Element => {

  const all : any = useThemeContext()

  console.log({all})

  // const bool = isLightTheme ? 'Ligth' : 'Dark'

  const toggleTheme = () => {
    all.insertData({
      firstname: 'jones',
      lastName: 'gabriel',
      isLightTheme : !all.isLightTheme,
      education : {
        primary: "greater",
        secondary: 'ccc',
        uni: 'NDU'
      }
    })
  }
  return (
       <>
        <div className='main'>Hello Page</div>
          <h1> {  } </h1>
        <button onClick={toggleTheme}>Change state</button>
       </>
  )
}

export default Hello