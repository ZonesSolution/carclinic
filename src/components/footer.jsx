import React from 'react'
import { facebook, instagram, twitter } from '../assets/images'

const Footer = () => {
  return (
    <div className='px-28 flex justify-between text-white py-12 items-center'>
        <div>
            <p className='text-black px-2 pb-2'>Follow Us</p>
            <div className='flex gap-2'>
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={instagram} alt="instagram" />
            </div>
        </div>
        <div>
            <p className='text-black px-2 pb-2'>Contact Us:</p>
            <p className='text-black px-2 pb-2'>abdoundaoak@gmail.com</p>
        </div>
        <div>
            <p className='text-black px-2 pb-2'>
                Data Privacy Policy
            </p>
        </div>
    </div>
  )
}

export default Footer