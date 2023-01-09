import React, { useState, useEffect, useContext} from "react";
import { Outlet, Link } from "react-router-dom";

import Logo from "../../assets/SVGs/logo"; 

import Darkswitch from "../../assets/SVGs/darkswitch";
import LightSwitch from '../../assets/SVGs/lightswitch';

import './navstyle.css'
import LigthVideo from  '../../assets/videos/video-bg-light.mp4';
import DarkVideo from  '../../assets/videos/video-bg-light-negate.mp4';
import { useThemeContext } from "../../store/themeContext";


const NavigationRoot = ():JSX.Element => {
  const { themeSetter, isLightTheme }:any = useThemeContext()
  const changeTheme = () => {
    themeSetter({isLightTheme: !isLightTheme})
  }

  return (
    <>
    <div className={isLightTheme ? 'light' : 'dark'}>
      <div className="font-light  text-slate-900 dark:text-white">

   
      <div className={`flex flex-row  w-3/4 justify-between items-center content-center mx-auto h-32`}>
        <div className="brand">
          <Logo Fill={isLightTheme ? 'black' : 'white'}/>
        </div>

      <div className="right-side flex justify-between items-center w-auto gap-20">

          <ul className="flex gap-20">
              <li><Link to="/">About me</Link></li>
              <li><Link to="projects">Projects</Link></li>
              <li><Link to="resume">Resume</Link></li>
              <li><Link to="hello">Hello!</Link></li>
          </ul>
          <div className="day-icon cursor-pointer" onClick={changeTheme}>
            { isLightTheme ? <LightSwitch Fill="black"/> : <Darkswitch Fill="white"/> }
            
          </div>
      </div>
      </div>


      <div className="backgroundVideo bg-white dark:bg-black">
        <video src={ isLightTheme ? LigthVideo : DarkVideo } className="bg-video" autoPlay loop muted >
        </video>
      </div>

    
        <Outlet />

        </div>
     
      </div>
    </>
  )
}

export default NavigationRoot