import React from 'react';
import './project.styles.css';
import PorrtfolioGif from '../../../assets/gifs/portfolio.gif';
import Tags from '../tags';

const Project = () => {
  return (
    <div className='project w-1/4 flex flex-col items-end justify-end rounded overflow-clip relative'>
      
      <div className="caption p-5 text-white ">
        <h3 className='text-xl font-semibold z-20'>React text colorfy</h3>
        <p>Welcome to our library of original guides to the world of typography, which the Google Fonts team is </p>

        <div className="labels mt-4 flex gap-2">
          <Tags label='Javascript'/>
          <Tags label='HTML'/>
          <Tags label='CSS'/>
        </div>

      </div>

      {/* tages go here */}



      {/* tags end here */}

    <div className="myimage absolute -z-20 w-1/1 h-1/1  overflow-clip object-cover">

      <img src={PorrtfolioGif} alt="portfolio website" className=' flex object-fill h-2/2 ' />

    </div>

    
    </div>
  )
}

export default Project