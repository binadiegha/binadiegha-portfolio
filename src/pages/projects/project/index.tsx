import React from 'react';
import './project.styles.css';
import PorrtfolioGif from '../../../assets/gifs/portfolio.gif';
import Tags from '../tags';
import {motion } from 'framer-motion/dist/framer-motion'

const Project = () => {
  return (
    <div className='project w-1/4 flex flex-col items-end justify-end relative overflow-clip'>
      
      <motion.div  
        layout
        intial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className="caption p-5 text-white cursor-pointer">

        <h3 className='text-xl font-semibold z-20 mt-10'>React text colorfy</h3>

        <p>Welcome to our library of original guides to the world of typography, which the Google Fonts team is </p>

        <div className="labels mt-4 flex gap-2 mb-5">
          <Tags label='Javascript'/>
          <Tags label='HTML'/>
          <Tags label='CSS'/>
        </div>

      </motion.div>

      {/* tages go here */}



      {/* tags end here */}

    <div className="myimage absolute -z-20 h-[100%] overflow-hidden ">

      <img src={PorrtfolioGif} alt="portfolio website" className=' flex object-cover h-[100%]'  />

    </div>

    
    </div>
  )
}

export default Project