import React, { useState } from 'react'
import { logo } from '../assets/images'
import { Link } from 'react-router-dom'

const Navbar = ({ active }) => {
  return (
    <nav className='bg-white py-2 px-3 flex'>
      <div className='w-[30%]'>
        <Link to={'/'}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className='w-[50%] flex items-center justify-end px-20'>
        <ul className='flex items-center justify-end gap-12'>
          <Link to={'/'} className={`${active === 0 ? 'bg-[#011E33] px-[30px] py-[10px] text-white rounded-full cursor-pointer' : 'cursor-pointer'}`}>CarClinic</Link>
          <Link to={'/car-clinic-pro'} className={`${active === 1 ? 'bg-[#011E33] px-[30px] py-[10px] text-white rounded-full cursor-pointer' : 'cursor-pointer'}`}>CarClinic Pro</Link>
          <Link to={'/privacy-policy'} className={`${active === 2 ? 'bg-[#011E33] px-[30px] py-[10px] text-white rounded-full cursor-pointer' : 'cursor-pointer'}`}>Privacy Policy</Link>
        </ul>
      </div>
      <div className='w-[20%] flex items-center justify-center gap-2'>
        <Link to={'/signin'}>
          <button className='bg-[#DBDBFE] px-[30px] py-[10px] text-xl font-bold rounded-full'>Log In</button>
        </Link>
        <Link to={'/signup'}>
          <button className='bg-[#011E33] px-[30px] py-[10px] text-white text-xl font-bold rounded-full'>Sign Up</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar