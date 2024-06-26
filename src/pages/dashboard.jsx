import React from 'react'
import { car, partner1, partner2, partner3, partner4, partner5, partner6 } from '../assets/images'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

const Dashboard = () => {
    return (
        <>
            <Navbar/>
            <div className='bg-white flex justify-center items-center py-24'>
                <img src={car} alt="car" />
            </div>
            <button className='bg-[#011E33] font-bold w-full py-8 text-[#bdbdbd] text-4xl max-sm:text-xl'>Click Here To Chat With Us</button>
            <div className='flex flex-col py-8'>
                <h2 className='text-[#011E33] text-3xl font-bold pb-4 text-center'>Shop For Parts</h2>
                <div className='flex flex-col justify-center items-center gap-4 max-sm:px-6'>
                    <div className='flex gap-6 max-sm:flex-col'>
                        <img className='max-sm:w-80' src={partner1} alt="partner" />
                        <img className='max-sm:w-80' src={partner2} alt="partner" />
                        <img className='max-sm:w-80' src={partner3} alt="partner" />
                    </div>
                    <div className='flex gap-10 max-sm:flex-col'>
                        <img className='max-sm:w-80' src={partner4} alt="partner" />
                        <img className='max-sm:w-80' src={partner5} alt="partner" />
                        <img className='max-sm:w-80' src={partner6} alt="partner" />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Dashboard