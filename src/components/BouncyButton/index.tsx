import React from 'react';
import { useThemeContext } from '../../store/themeContext';
import BouncyArrow from '../../assets/SVGs/bouncyArrow';
import './bouncystyle.css';


const BouncyButton = ():JSX.Element => {

  const {isLightTheme} :any  = useThemeContext();


  console.log(isLightTheme)
  return (
    <div className='flex items-center justify-start gap-7 mt-10' style={{ width: 'max-content'}}>
     See my projects <span className="vbounce"><BouncyArrow Fill={!isLightTheme ? 'white' :'black' }/>
 </span>    </div>
  )
}

export default BouncyButton