import React from 'react';
import './projectslist.styles.css';
import Project from '../project';
import {motion} from 'framer-motion/dist/framer-motion';

const ProjectsList = () => {

  return (

    <motion.div layout className='allprojects flex mt-10 flex-wrap'>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </motion.div>
  )
}

export default ProjectsList