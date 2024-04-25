import React, { useState } from 'react'
import { chatimage } from '../assets/images'
import { Link } from 'react-router-dom'

const ForgetPassword = ({ active }) => {
    return (
        <>
            <div className='flex h-[100vh]'>
                <div className='w-1/4 bg-white flex justify-center items-center h-full'>
                    <Link to={'/'}>
                        <img src={chatimage} alt="chat-image" />
                    </Link>
                </div>
                <div className='w-3/4 bg-white flex flex-col justify-center items-center'>
                    <div className='w-full px-16'>
                        <h2 className='text-[#011E33] text-2xl font-bold pb-4'>Forget Password</h2>
                        <form className='flex justify-between w-full gap-12 pb-6 border-b border-[#011E33]'>
                            <div className='w-full'>
                                <div className='flex flex-col gap-6'>
                                    <input className='border px-2 py-2 rounded-md' type="email" placeholder='Email Address' />
                                    <Link to={'/verify'}>
                                        <input className='text-white bg-[#011E33] px-[30px] py-[10px] text-md font-medium rounded-md w-1/4 cursor-pointer' type="submit" value="Continue" />
                                    </Link>
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

export default ForgetPassword