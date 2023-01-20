
import React from 'react';
import { useRouteError } from 'react-router-dom';
import { useThemeContext } from '../../../store/themeContext';
import {Player, Controls} from '@lottiefiles/react-lottie-player'
import { Link } from 'react-router-dom';

// in @types/reach__router
const Error404 = ():JSX.Element => {

const { isLightTheme, themeSetter} : any = useThemeContext();

// get and log the error
const error: any = useRouteError();
console.log(error)
console.log(isLightTheme)

  return (
   <div className={isLightTheme ? 'light' : 'dark'}>
    <div className="font-light dark:font-normal text-slate-900 dark:text-white flex flex-col items-center justify-center">

      <div id="error-page" className="flex flex-col justify-center items-center mt-40">

        <Player
          style={{ height: '300px', width: '300px' }}
          autoplay
          loop
          src="https://assets7.lottiefiles.com/packages/lf20_ukmmbtae.json"
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
        <h2 className="text-2xl font-normal"> {error.status } | {  error.statusText} </h2>

        <p className="text-xl text-center mt-10">Not sure we know where this is heading <br/> we're lost in space!</p>

        <Link to="/" className='mt-10'>Go Back Home</Link>
      </div>
    </div>
   </div>
  )
}


export default Error404;