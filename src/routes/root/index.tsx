import React from "react";
import { Outlet, Link } from "react-router-dom";


const NavigationRoot = ():JSX.Element => {
  return (
    <>
      <ul>
        <li><Link to="/">About me</Link></li>
        <li><Link to="projects">Projects</Link></li>
        <li><Link to="resume">Resume</Link></li>
        <li><Link to="hello">Hello!</Link></li>
      </ul>


      <Outlet />
    </>
  )
}

export default NavigationRoot