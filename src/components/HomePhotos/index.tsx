import React from 'react';
import InitialPhotos from '../../assets/images/name-initials.png';
import RealPhoto from '../../assets/images/real-face.png'
import AppleEmoji from '../../assets/images/cartoon-face.png';
import './emojis.css';

const HomePhotos = ():JSX.Element => {
  return (
    <div className='flex '>
      <img src={AppleEmoji} alt="apple emoji photo"  className="resize-img scale-100 hover:scale-150 hover:z-20"/>

      <img src={RealPhoto} alt="real photo" className="resize-img scale-100 hover:scale-150 hover:z-20 -translate-x-8"/>

      <img src={InitialPhotos} alt="photo of my initials" className="resize-img scale-100 hover:scale-150 hover:z-20 -translate-x-16"/>
    </div>
  )
}

export default HomePhotos