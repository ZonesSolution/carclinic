import React from 'react'
import { email, formimg, location, phone } from '../assets/images'

const Contactform = () => {
    return (
        <div className="relative h-screen">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${formimg})` }}
            ></div>
            <div className="absolute inset-0 flex max-sm:flex-col px-28 max-sm:px-4 items-center gap-20 max-sm:py-6">
                <div className='flex flex-col w-1/2 max-sm:w-full max-sm:hidden'>
                    <div>
                        <h3 className='text-white text-3xl font-bold pb-2 max-sm:text-xl'>TRUST OUR SERVICE TO GET <br className='max-sm:hidden'></br> YOU BACK ON THE ROAD</h3>
                        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br className='max-sm:hidden'></br> Ut elit tellus, luctus nec ullamcorper mattis, pulvinar</p>
                    </div>
                    <div className='flex flex-col pt-8 gap-4'>
                        <div className='flex items-center gap-4'>
                            <img src={location} alt="icon" />
                            <div className='flex flex-col'>
                                <h4 className='text-white font-bold'>LOCATION</h4>
                                <p className='text-white font-medium'>1265 11th Ave Calgary Alberta XYZ</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <img src={email} alt="icon" />
                            <div className='flex flex-col'>
                                <h4 className='text-white font-bold'>EMAIL</h4>
                                <p className='text-white font-medium'>support@example.com</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <img src={phone} alt="icon" />
                            <div className='flex flex-col'>
                                <h4 className='text-white font-bold'>PHONE</h4>
                                <p className='text-white font-medium'>62 123 4567 890</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-2xl px-8 py-12 max-sm:py-4 flex flex-col w-1/2 max-sm:w-full'>
                    <h2 className='text-center text-[#011E33] text-2xl font-bold pb-6 max-sm:text-xl'>HOW CAN WE HELP</h2>
                    <form className='flex flex-col gap-4'>
                        <input className='border px-4 py-2' type="text" placeholder='YOUR NAME'/>
                        <input className='border px-4 py-2' type="text" placeholder='PHONE NUMBER'/>
                        <input className='border px-4 py-2' type="text" placeholder='EMAIL ADDRESS'/>
                        <textarea className='border px-4 py-2 h-44 max-sm:h-28' name="your-issue" id="" cols="30" rows="10" placeholder='YOUR ISSUE'></textarea>
                        <input className='text-white bg-[#011E33] px-[30px] py-[10px] text-xl font-bold rounded-md self-center' type="submit" value="SEND MESSAGE" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactform