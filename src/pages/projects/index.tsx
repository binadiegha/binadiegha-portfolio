import React from 'react'
import { Link, useParams } from 'react-router-dom';
import {motion} from "framer-motion/dist/framer-motion";
import ProjectsList from './ProjectsList';


interface Props {
  className?: string | object,
  style?: object,
}

interface LinksTypes {
  name: string,
  path: string,
  click?: () => void
}
type Links = LinksTypes[]

const Projects = ( props:Props ) => {

  const categories:Links = [
    {
      name: 'all',
      path: 'all'
    },
    {
      name: 'Dev-tools',
      path: 'dev-tools'
    },
    {
      name: 'Design',
      path: 'design'
    },
    {
      name: 'Opnesource',
      path: 'opens-ource'
    },
    {
      name: 'apps',
      path: 'apps'
    },
  ]
  const path = useParams();


  console.log(path.name)

 
  return (
<>

    <div className='flex w-3/4 mx-auto mt-20'>

        <div className="primary-content flex flex-col gap-12 justify-start items-start">
              <h1 className="greeting text-5xl font-normal">Projects</h1>

              <p className="message text-xl w-1/2 leading-relaxed">
              If you are here. it means you probably are attempting to get in touch with me. If this is the case, the you can reach me via email at <span className="font-bold">jonesbgabriel@gmail.com </span>
              To save yourself the stress of copying my email and going to your email app to send and email, welll...
              </p>

            
              <motion.div 
                layout
                className='categories flex gap-10'
          
              >
                {
                  categories.map( (category, index) =>  <Link to={category.path} key={category.path}><motion.button 
                    
                    initial={{ opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -100}}
                    transition={{ type: 'spring', duration: 0.6*(index+1) }}

                    className={`${(path.name === category.path || (path.name === undefined && category.path === 'all')) ? ' bg-slate-900 dark:bg-white  p-5 text-white dark:text-slate-900' : ''}  p-5 text-xl font-medium rounded-xl px-10 flex gap-10 capitalize`}> {category.name} </motion.button></Link> )
                }
              </motion.div>
            </div>
    </div>

                <ProjectsList />
</>
  ) satisfies JSX.Element
}

export default Projects