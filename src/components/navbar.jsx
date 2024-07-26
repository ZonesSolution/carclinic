import React, { useState } from 'react'
import { logo, menu } from '../assets/images'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

const Navbar = ({ active }) => {
  const [submenu, setSubmenu] = useState(false)
  const authenticated = localStorage.getItem('auth')
  const [auth, setAuth] = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ''
    })
    localStorage.removeItem('auth')
    navigate('/signin')
  }

  return (
    <nav className='bg-white py-2 px-3 flex max-sm:flex-col'>
      <div className={`w-[30%] flex items-center max-sm:w-full max-sm:${submenu ? 'pb-6' : 'pb-0'}`}>
        <Link to={'/'}>
          <img src={logo} alt="logo" />
        </Link>
        <Link onClick={() => setSubmenu(!submenu)} className='hidden max-sm:block' to={'/'}>
          <img src={menu} width={40} alt="logo" />
        </Link>
      </div>
      <div className={`w-[50%] flex items-center justify-end px-20 max-sm:w-[100%] max-sm:${submenu ? 'block' : 'hidden'}`}>
        <ul className='flex items-center justify-end gap-12 max-sm:gap-4 max-sm:flex-col max-sm:w-full'>
          <Link to={'/'} className={`${active === 0 ? 'bg-[#011E33] px-[30px] py-[10px] text-white rounded-full cursor-pointer' : 'cursor-pointer'}`}>CarClinic</Link>
          <Link to={'/car-clinic-pro'} className={`${active === 1 ? 'bg-[#011E33] px-[30px] py-[10px] text-white rounded-full cursor-pointer' : 'cursor-pointer'}`}>CarClinic Pro</Link>
          <Link to={'/privacy-policy'} className={`${active === 2 ? 'bg-[#011E33] px-[30px] py-[10px] text-white rounded-full cursor-pointer' : 'cursor-pointer'}`}>Privacy Policy</Link>
        </ul>
      </div>
      <div className={`w-[20%] flex items-center justify-center gap-2 max-sm:w-full max-sm:flex-col max-sm:pt-4 max-sm:${submenu ? 'flex-col' : 'hidden'}`}>
        {!authenticated &&
          <>
            <Link to={'/signin'}>
              <button className='bg-[#DBDBFE] px-[30px] py-[10px] text-xl font-bold rounded-full'>Log In</button>
            </Link>
            <Link to={'/signup'}>
              <button className='bg-[#011E33] px-[30px] py-[10px] text-white text-xl font-bold rounded-full'>Sign Up</button>
            </Link>
          </>
        }
        {authenticated && (
          <>
            <Link to={'/dashboard/user'}>Dashboard</Link>
            <button onClick={handleLogout} className='bg-[#011E33] px-[30px] py-[10px] text-white text-xl font-bold rounded-full'>Logout</button>
          </>
        )}
        
      </div>

      {/* mobile menu */}
    </nav>
  )
}

export default Navbar