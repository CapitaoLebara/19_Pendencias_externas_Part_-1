import React from 'react'

import Logo from '../assets/image/Logo.jpg'

//NAVIGATE
import { useNavigate } from 'react-router-dom'
import { LogOut } from './LogOut'

export const HeadGlob = ({children}) => {
    //<script>
      //REDIRECT FROM HOME
    const navigate = useNavigate()
    function RedirectHome(){
      navigate('/home')
    }

    //<script/>


  return (
    <header className='flex  py-3 px-[5.6rem] justify-between bg-[#27272A] text-white w-full'>
    <img src={Logo} onClick={RedirectHome} className=' cursor-pointer rounded-full w-[60px] border-white border-[2px]' />
    {children}
  </header>
  )
}
