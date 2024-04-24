import React from 'react'
import { logo } from '../assets/images'

const Navbar = () => {
  return (
    <nav className='bg-white py-2 px-3 flex'>
      <div className='w-[30%]'>
        <img src={logo} alt="logo" />
      </div>
      <div className='w-[50%] flex items-center justify-end px-20'>
        <ul className='flex items-center justify-end gap-12'>
          <li className='bg-[#011E33] px-[30px] py-[10px] text-white rounded-full'>CarClinic</li>
          <li>CarClinic Pro</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className='w-[20%] flex items-center justify-center gap-2'>
        <button className='bg-[#DBDBFE] px-[30px] py-[10px] text-xl font-bold rounded-full'>Log In</button>
        <button className='bg-[#011E33] px-[30px] py-[10px] text-white text-xl font-bold rounded-full'>Sign Up</button>
      </div>
    </nav>
  )
}

export default Navbar