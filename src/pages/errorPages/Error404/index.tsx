
import React from 'react';
import { useRouteError } from 'react-router-dom';
import { useThemeContext } from '../../../store/themeContext';

// in @types/reach__router
const Error404 = ():JSX.Element => {

const { isLightTheme, themeSetter} : any = useThemeContext();

// get and log the error
const error: any = useRouteError();
console.log(error)
console.log(isLightTheme)

  return (
   <div className={isLightTheme ? 'light' : 'dark'}>
    <div className="font-light dark:font-normal text-slate-900 dark:text-white">
      <div id="error-page">
        <h2> {error.status } | {  error.statusText} </h2>
      </div>
    </div>
   </div>
  )
}


export default Error404;