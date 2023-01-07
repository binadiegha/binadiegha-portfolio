import React, { useState, useEffect} from "react";
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
  const [mode, setMode]:any = useState()

  // use effect to check video
  useEffect( ():any => {
    if(darkTheme){
      setBgVideoLink(DarkVideo);
      setthemeSwitch(<LightSwitch />);
      setMode('dark')
      console.log('dark theme');
    } else {
      setBgVideoLink(LigthVideo);
      setthemeSwitch(<Darkswitch />);
      console.log('light theme')
      setMode('light')
    }
  }, [themeSwitch])

  // toggle dark mode
  const toggleTheme = ():void => {
    setDarkTheme(!darkTheme)
  }


  return (
    <>
    <div className={`${mode}`}>

   
      <div className={`flex flex-row  w-3/4 justify-between items-center content-center mx-auto h-24`}>
        <div className="brand">
          <Logo Fill={darkTheme ? 'white' : 'black'}/>
        </div>

      <div className="right-side flex justify-between items-center w-auto gap-20">

          <ul className="flex gap-20 text-slate-900 dark:text-white">
              <li><Link to="/">About me</Link></li>
              <li><Link to="projects">Projects</Link></li>
              <li><Link to="resume">Resume</Link></li>
              <li><Link to="hello">Hello!</Link></li>
          </ul>

          <div className="day-icon" onClick={toggleTheme}>
            {darkTheme ? <LightSwitch /> : <Darkswitch />}
            
          </div>
      </div>

      </div>


      <div className="backgroundVideo bg-white dark:bg-black">
        <video src={bgVideoLink} className="bg-video" autoPlay loop muted >
        </video>
      </div>

      <Outlet />

      </div>
    </>
  )
}

export default NavigationRoot