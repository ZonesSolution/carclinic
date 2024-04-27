import React from 'react'
import { facebook, instagram, twitter } from '../assets/images'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='px-28 max-sm:px-4 flex justify-between text-white py-12 items-center max-sm:flex-col'>
        <div>
            <p className='text-black px-2 pb-2'>Follow Us</p>
            <div className='flex gap-2'>
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={instagram} alt="instagram" />
            </div>
        </div>
        <div>
            <p className='text-black px-2 pb-2'>Location : 125 Western Ave, Boston, MA 02163</p>
            <p className='text-black px-2 pb-2'>Email: Abdou@heydrian.us</p>
            <p className='text-black px-2 pb-2'>Phone : 401-349-1992</p>
        </div>
        <div>
            <Link to={'/privacy-policy'} className='text-black px-2 pb-2'>
                Data Privacy Policy
            </Link>
        </div>
    </footer>
  )
}

export default Footer