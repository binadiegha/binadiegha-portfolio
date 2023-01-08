import React, { useState, useEffect, useContext} from "react";
import { Outlet, Link } from "react-router-dom";

import Logo from "../../assets/SVGs/logo";
import {ReactComponent as LogoDark} from '../../assets/images/logoDark.svg' 

import Darkswitch from "../../assets/SVGs/darkswitch";
import LightSwitch from '../../assets/SVGs/lightswitch';

import './navstyle.css'
import LigthVideo from  '../../assets/videos/video-bg-light.mp4';
import DarkVideo from  '../../assets/videos/video-bg-light-negate.mp4';


const NavigationRoot = ():JSX.Element => {

  type modes = 'dark' | 'light'
  const [bgVideoLink, setBgVideoLink]:any = useState(LigthVideo);
  const [darkTheme, setDarkTheme] = useState(false);
  const [themeSwitch, setthemeSwitch]:any = useState();
  const [mode, setMode] = useState<modes>('light')
// collects all data to be passed to the contextAPI
  const [contextData, setContextData] = useState<object>();

  // use effect to handle video hange, theme change and theme change icon
  useEffect( ():any => {
    // this block runs if theme is set to dark mode [dark].
    if(darkTheme){
      setBgVideoLink(DarkVideo);
      setthemeSwitch(<LightSwitch />);
      setMode('dark')

      setContextData({...contextData, Theme: mode})
      console.log('dark theme');

    } else {

      // this block runs if theme is set to light mode [light].
      setBgVideoLink(LigthVideo);
      setthemeSwitch(<Darkswitch />);
      console.log('light theme')
      setMode('light')
      setContextData({...contextData, Theme: mode})
    }
  }, [darkTheme])

  // toggle dark mode
  const toggleTheme = ():void => {
    setDarkTheme(!darkTheme)
  }
// 
  const AppContext = React.createContext(contextData)

  return (
    <>
    <div className={`${mode}`}>

   
      <div className={`flex flex-row  w-3/4 justify-between items-center content-center mx-auto h-32`}>
        <div className="brand">
          <Logo Fill={darkTheme ? 'white' : 'black'}/>
        </div>

      <div className="right-side flex justify-between items-center w-auto gap-20">

          <ul className="flex gap-20 font-light dark:font-normal text-slate-600 dark:text-white">
              <li><Link to="/">About me</Link></li>
              <li><Link to="projects">Projects</Link></li>
              <li><Link to="resume">Resume</Link></li>
              <li><Link to="hello">Hello!</Link></li>
          </ul>
          <div className="day-icon cursor-pointer" onClick={toggleTheme}>
            {darkTheme ? <LightSwitch /> : <Darkswitch />}
            
          </div>
      </div>
      </div>


      <div className="backgroundVideo bg-white dark:bg-black">
        <video src={bgVideoLink} className="bg-video" autoPlay loop muted >
        </video>
      </div>

      <AppContext.Provider value={contextData}>
        <Outlet />
      </AppContext.Provider>
     
      </div>
    </>
  )
}

export default NavigationRoot