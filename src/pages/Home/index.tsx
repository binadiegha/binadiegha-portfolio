import React from 'react'
import HomePhotos from '../../components/HomePhotos'
import Technologies from '../../components/Technologies'
import BouncyButton from '../../components/BouncyButton'
import Socials from '../../components/socials'

const Home = () => {

  return (
    <div className='flex mx-auto w-3/4 mt-40 justify-between items-start' >
      
      <div className="about w-2/3" >
        <h1 className='greeting text-5xl font-normal'>I'm Jones B Gabriel </h1>

        <p className='message text-xl w-3/4 leading-relaxed mt-10 font-thin'> Welcome to our library of original guides to the world of typography, which the Google Fonts team is producing in collaboration with typographic experts from around the world. Google Fonts Knowledge enables designers and developers of all skill sets to choose and use type with purpose.</p>

        <Technologies className="flex none"/>

        <BouncyButton />

        <Socials />
      </div>

      <div className="photos">
        
        <HomePhotos />
      </div>
    </div>
  )
}

export default Home