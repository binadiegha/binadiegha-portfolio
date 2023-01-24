import React from 'react';
import './projectslist.styles.css';
import Project from '../project';
import {motion} from 'framer-motion/dist/framer-motion';
import Overlay from '../overlay';

const ProjectsList = () => {

  return (

   <>
     <motion.div layout className='allprojects flex mt-10 flex-wrap mx-auto'>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </motion.div>


    <Overlay />
   </>
  )
}

export default ProjectsList