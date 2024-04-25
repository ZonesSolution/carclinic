import React, { useState } from 'react'
import { chatimage } from '../assets/images'
import { Link } from 'react-router-dom'

const Verify = ({ active }) => {
    return (
        <>
            <div className='flex h-[100vh]'>
                <Link to={'/'}>
                    <img src={chatimage} alt="chat-image" />
                </Link>
                <div className='w-3/4 bg-white flex flex-col justify-center items-center'>
                    <div className='w-full px-16'>
                        <h2 className='text-[#011E33] text-2xl font-bold pb-4'>Enter Code</h2>
                        <form className='flex justify-between w-full gap-12 pb-6 border-b border-[#011E33]'>
                            <div className='w-full'>
                                <div className='flex flex-col gap-6 justify-center'>
                                    <div className='flex gap-6'>
                                        <input className='border-2 w-12 h-12' type="text" />
                                        <input className='border-2 w-12 h-12' type="text" />
                                        <input className='border-2 w-12 h-12' type="text" />
                                        <input className='border-2 w-12 h-12' type="text" />
                                    </div>
                                    <input className='text-white bg-[#011E33] px-[30px] py-[10px] text-md font-medium rounded-md w-1/4 cursor-pointer' type="submit" value="Continue" />
                                </div>
                            </div>
                        </form>
                        <p className='py-4 font-medium'>Already have an account ? <span className='cursor-pointer'>SignIn</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Verify