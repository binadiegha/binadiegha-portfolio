import React from 'react';
import './project.styles.css';
import PorrtfolioGif from '../../../assets/gifs/portfolio.gif';

const Project = () => {
  return (
    <div className='project w-1/4 flex flex-col items-end justify-end overflow-clip'>
      
      <div className="caption p-5 text-white">
        <h3 className=' text-xl font-semibold z-20 '>React text colorfy</h3>
        <p>Welcome to our library of original guides to the world of typography, which the Google Fonts team is </p>


      </div>

    <div className="myimage absolute -z-20 w-1/1 h-1/1  overflow-clip">
      <img src={PorrtfolioGif} alt="portfolio website" className=' object-cover'/>
    </div>

    
    </div>
  )
}

export default Project