import React from 'react';
import Icons from '../../assets/SVGs';
import './tech.css'

type sth = {
  className : string
}

const Technologies = ({className}:sth) => {
  return (
    <div className='flex gap-3 mt-10 items-center justify-start h-10'>

    <div className="hider flex  justify-between items-center gap-1 "> <span className="tech-icon"> <Icons.Javascript/> </span> <span className='tech-name'> JavaScript </span> </div>

    <div className="hider flex  justify-between items-center gap-1 "> <span className="tech-icon"> <Icons.Git/> </span> <span className='tech-name'> Git </span> </div>

      
    <div className="hider flex  justify-between items-center gap-1 "> <span className="tech-icon"> <Icons.Html5/> </span> <span className='tech-name'> HTML 5 </span> </div>

      
    <div className="hider flex  justify-between items-center gap-1 "> <span className="tech-icon"> <Icons.Css/> </span> <span className='tech-name'> CSS </span> </div>


    <div className="hider flex  justify-between items-center gap-1 "> <span className="tech-icon"> <Icons.Nodejs/> </span> <span className='tech-name'> NodeJS </span> </div>


    <div className="hider flex  justify-between items-center gap-1 "> <span className="tech-icon"> <Icons.ReactIcon/> </span> <span className='tech-name'> ReactJS </span> </div>


    <div className="hider flex  justify-between items-center gap-1 "> <span className="tech-icon"> <Icons.Redux/> </span> <span className='tech-name'> Redux </span> </div>
 

    </div>
  )
}

export default Technologies