import React from 'react';
import './style.css';
import SendIcon from '../../assets/SVGs/send_icon';
import { useThemeContext } from '../../store/themeContext';

const Hello = ():JSX.Element => {

  const {isLightTheme}:any  = useThemeContext()

 
  return (
       <>
          <div className="main w-3/4 mx-auto mt-48">
            <div className="primary-content flex flex-col gap-12 justify-start items-start">
              <h1 className="greeting text-7xl font-normal">Hello !</h1>

              <p className="message text-xl w-1/2 leading-relaxed">
              If you are here. it means you probably are attempting to get in touch with me. If this is the case, the you can reach me via email at <span className="font-bold">jonesbgabriel@gmail.com </span>
To save yourself the stress of copying my email and going to your email app to send and email, welll...
              </p>


              <button className="bg-slate-900 dark:bg-white p-5 text-white dark:text-slate-900 text-xl font-medium rounded-xl px-10 flex gap-10"> Click here to email me  <SendIcon Fill={isLightTheme ? 'white' : 'black'}/> </button> 
            </div>
          </div>
       </>
  )
}

export default Hello