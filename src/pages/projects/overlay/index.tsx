import React from 'react';
import './overlay.styles.css'
import { useToggleContext } from '../../../store/toggleContext';
import {motion} from 'framer-motion/dist/framer-motion'
import Photo from '../../../assets/gifs/portfolio.gif';
import Tags from '../tags';
import Icons from '../../../assets/SVGs';
import { useThemeContext } from '../../../store/themeContext';

const Overlay = () => {

  const {toggle, toggleSetter}:any = useToggleContext();
  const {isLightTheme}:theme = useThemeContext()

  const click =():void => {
    console.log('clicked')
    toggleSetter()
  }

  console.log(toggle);
  return (
    <div
      className={`${toggle ? 'flex' : 'hidden'} overlay-bg w-full h-full z-50 fixed top-0 right-0 flex justify-end`}

      onClick={click}
    >
      <motion.div 

      
      className={`${toggle ? 'translate-x-[0%]' : ' translate-x-[100%] delay-[2000]'} overlay-inner flex w-1/3 h-full bg-slate-100 dark:bg-neutral-800 justify-center`}
      > 
     <div className="container w-[92%] mb-[100px] overflow-y-scroll scroll-smooth scrollbar-hide">

        {/* close section */}
        <div className="close border-b-2 h-[80px] flex justify-between items-center">
          <Icons.Close />
          <p className=' text-lg'>Projects / react text colorfy</p>
        </div>

        {/* Image */}

        <div className="tech-section mt-4">
          <h4 className="techs text-2xl font-semibold">React text colorfy</h4>
        
          <p className="about mt-2">
        Welcome to our library of original guides to the world of typography, which the Google Fonts team is produce.
        </p>

        </div>



        <div className='w-[100%] rounded-xl overflow-clip mt-4'>
          <img alt="project image" src={Photo}  className='w-[100%]'/>
        </div>

        <h4 className="techs text-lg font-semibold mt-4">About</h4>

        <p className="about mt-2">
        Welcome to our library of original guides to the world of typography, which the Google Fonts team is producing in collaboration with typographic experts from
        Welcome to our library of original guides to the world of typography, which the Google Fonts team is producing in collaboration with typographic experts from
        </p>

        <div className="section mt-4">
          <h4 className="techs text-lg font-semibold">Technologies</h4>

          <div className="tech-list flex gap-2 mt-2 flex-wrap">
          <Tags label='Javascript'/>
          <Tags label='Nodejs'/>
          <Tags label='React'/>
          <Tags label='Tailwind'/>
          <Tags label="Typescript"/>
          <Tags label="CSS"/>
          <Tags label="HTML"/>
          <Tags label="Framer motion"/>
          </div>
        </div>

        <div className="sec mt-10">
        <div className="icon-text flex gap-2">
          <Icons.WebIcon Fill={`${isLightTheme ? 'black' : 'white'}`}/>
        <h4 className="techs text-lg font-semibold">Website</h4>
        </div>
        <p className="word mt-2">https://google.com</p>
        </div>

        <div className="sec mt-4 mb-20">
        <div className="icon-text flex items-center gap-2">
        <Icons.Github Fill={`${isLightTheme ? 'black' : 'white'}`} />
        <h4 className="techs text-lg font-semibold">Gitbub</h4>
        </div>
         
        <p className="word mt-2">https://google.com</p>
        </div>

        
       
        {/* end of container */}
     </div>
     
     <button className='w-[100%] dark:bg-white bg-black text-white dark:text-gray-800 h-[100px] absolute bottom-0 left-0 flex items-center justify-center gap-4'> Open project
      <Icons.OpenIcon Fill={`${isLightTheme ? 'white' : 'black'}`} /> 
    </button>
      
      </motion.div>
    </div>
  )
}

export default Overlay