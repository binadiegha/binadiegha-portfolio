import React from 'react';
import Icons from '../../assets/SVGs';
import { useThemeContext } from '../../store/themeContext';

const Socials = (): JSX.Element => {

  const {isLightTheme}:any = useThemeContext();
  return (
    <div className=' mt-20'>
      <div className='flex flex-column justify-start items-center gap-10'>
        <Icons.Twitter Fill={isLightTheme ? 'black' : 'white'} />
        <Icons.Linkedin Fill={isLightTheme ? 'black' : 'white'} />
        <Icons.Instagram Fill={isLightTheme ? 'black' : 'white'} />
        <Icons.Github Fill={isLightTheme ? 'black' : 'white'} />
      </div>
    </div>
  )
}

export default Socials